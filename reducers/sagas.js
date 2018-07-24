import { takeEvery, takeLatest, all, put, call } from 'redux-saga/effects';
import firebase from '../firebase';
import store from '../reducers/combinedReducers';
import { 
    getColorSuccessAction, 
    getColorFailureAction,
    signInSuccessAction,
    signUpSuccessAction 
  } from '../actions/actions';


function* connect() {
  return new Promise(resolve => {
    const database = firebase.database();
    const connectionRef = database.ref();
    console.log(connectionRef.on('value', resolve));
  });
}

// getting all the colors from /colors/ snapshot
function* getFirebase() {
  const itemsRef = yield firebase.database().ref();
  
  itemsRef.on('value', (snapshot) => {
    store.dispatch(getColorSuccessAction(snapshot.val()));
  }, (errorObject) => {
    store.dispatch(getColorFailureAction());
  });
}

function* signIn(data) {
  const auth = firebase.auth();
  const result = yield call(
    [auth, auth.signInWithEmailAndPassword],
    data.data.email,
    data.data.password
  )

  console.log(result);

  yield put(signInSuccessAction(result));
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
    // yield saveColor(result.user.uid, {data: [1, 2, 3]});

    // now needs to use navigate.back()

    console.log(result.user.uid);

  } catch(error) {
    console.log(error);
  }
}

function* saveColor(uid, color) {
  const data = {
    rgb: color.data
  }

  console.log(data);

  // MAY NEED TO SAVE TO THE DATABASE USING A KEY AS I AM SIGNED IN

  // Get a key for a new color
  const newPostKey = firebase.database().ref().child('colors').push().key;

  // add the color to the list /colors/
  let updates = {};
  updates[`/colors/${uid}/${newPostKey}`] = data;
  console.log(updates[`/colors/${uid}/${newPostKey}`]);
  firebase.database().ref().update(updates).then(value => {
    console.log('then we will navigate to saved colors');
    // console.log(value);
    // Store.dispatch(actions.showAddNotification(beerName, 'beer'));
}).catch((error) => {
    console.log(error);
    // alert('error saving the beer');
});
}

export function* watchFirebase() {
  yield getFirebase();
}

export function* watchSaveColor(data) {
  console.log(data);
  yield saveColor('GHGkbhulhhlfkl', data);
}

export function* watchSignIn(data) {
  yield signIn(data);
}

export function* watchSignUp(data) {
  yield signUp(data);
}

// single entry point to start all our sagas at once
export default function* rootSaga() {
  yield all([
    watchFirebase()
  ])

  yield takeEvery('SAVE_COLOR', watchSaveColor);
  yield takeLatest('SIGN_IN', watchSignIn);
  yield takeLatest('SIGN_UP', watchSignUp);
}