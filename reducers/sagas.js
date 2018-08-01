import { takeEvery, takeLatest, all, put, call } from 'redux-saga/effects';
import firebase from '../firebase';
import persistorStore from '../reducers/combinedReducers';
import { 
  getColorSuccessAction, 
  getColorFailureAction, 
  signInSuccessAction,
  signInFailureAction,
  signUpSuccessAction
} from '../actions/actions';

// getting all the colors from /colors/ snapshot
// this looks bad but I still need to work out why snapshot is 
// not returned properly when we organise this request the 'saga' way
function* getColors(data) {
  const itemsRef = yield firebase.database().ref(`/colors`);
  
  itemsRef.on('value', (snapshot) => {
    persistorStore.store.dispatch(getColorSuccessAction(snapshot.val()));
  }, (errorObject) => {
    persistorStore.store.dispatch(getColorFailureAction());
  });
}

function* signIn(data) {
  try {
    const auth = firebase.auth();
    const result = yield call(
    [auth, auth.signInWithEmailAndPassword],
    data.data.email,
    data.data.password
  )

    console.log('the result is', result);

    // dispatching this action will redirect the logged in user to their colors list
    yield put(signInSuccessAction(result));
  } catch(error) {
    console.log('this is an error', error);
    yield put(signInFailureAction(error));
  }
}

// sign up will also sign the user in by calling yield signIn(data);
// the way this works, is yield call() will call firebase with the parameters.
// if there is an error, it will drop into the catch() without continuing.
// But if there is a success, it will continue and dispatch an action using the 
// 'yield put' method
function* signUp(data) {
  try {
    const auth = firebase.auth();
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      data.data.email,
      data.data.password
    )

    yield put(signUpSuccessAction(result.user.uid));
    yield signIn(data);
  } catch(error) {
    console.log(error);
  }
}

function* saveColor(data) {
  // Get a key for a new color
  const key = firebase.database().ref().child('colors').push().key;

  const obj = {
    rgb: data.colorsArray
  }

  // add the color to the list /colors/
  let updates = {};
  updates[`/colors/${data.id}/${key}`] = obj;
  firebase.database().ref().update(updates).then(value => {
    console.log('then we will navigate to saved colors');
}).catch((error) => {
    console.log(error);
});
}

export function* watchGetColors(data) {
  yield getColors(data);
}

export function* watchSaveColor(data) {
  yield saveColor(data);
}

export function* watchSignIn(data) {
  console.log('signing in with this data', data);
  yield signIn(data);
}

export function* watchSignUp(data) {
  yield signUp(data);
}

// single entry point to start all our sagas at once
export default function* rootSaga() {
  yield takeEvery('GET_FIREBASE_COLORS', watchGetColors);
  yield takeEvery('SAVE_COLOR', watchSaveColor);
  yield takeEvery('SIGN_IN', watchSignIn);
  yield takeEvery('SIGN_UP', watchSignUp);
}