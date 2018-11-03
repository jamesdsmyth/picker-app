import { takeEvery, takeLatest, all, put, call } from 'redux-saga/effects';
import firebase from '../firebase';
import persistorStore from '../reducers/combinedReducers';
import { 
  getColorSuccessAction, 
  getColorFailureAction,
  saveColorSuccessAction,
  saveColorFailureAction,
  createUserProfileSuccessAction,
  signInSuccessAction,
  signInFailureAction,
  signUpSuccessAction,
  signUpFailureAction
} from '../actions/actions';

// getting all the colors from /colors/ snapshot
// this looks bad but I still need to work out why snapshot is 
// not returned properly when we organise this request the 'saga' way
function* getColors(data) {
  const itemsRef = yield firebase.database().ref(`/colors/${data.data}`);

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

    // dispatching this action will redirect the logged in user to their colors list
    yield put(signInSuccessAction(result));

    // we will save the color if the user has signed up/signed in after clicking 'save'
    if(data.data.colorsArray.length === 3) {
      yield saveColor(data.data);
    }
    
  } catch(error) {
    yield put(signInFailureAction(error));
  }
}

// reset users password using their email address
// need to add dispatches here so we show a success or error message.
// need to restyle all of this now
function* resetPassword(data) {
  try {
    const auth = firebase.auth();
    const result = yield call(
      [auth, auth.sendPasswordResetEmail],
      data.data
    )
    alert('Reset password email sent');
  } catch(error) {
    alert('email failed');
  }
}

// here we create a profile for the user. Currently this just holds their name
function* createUserProfile(data) {
    // Get a key for a new profile
    const key = firebase.database().ref().child('profiles').push().key;

    const obj = {
      name: data.data.name
    }
  
    // add the color to the list /colors/
    let updates = {};
    updates[`/profiles/${data.data.uid}/${key}`] = obj;
  
    try {
      const auth = firebase.database().ref();
      yield call(
        [auth, auth.update],
        updates
      )
  
    } catch(error) {
      // yield put(saveColorFailureAction(error))
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
    data.data.uid = result.user.uid;

    yield createUserProfile(data);
    yield signIn(data);
    yield put(signUpSuccessAction(result.user.uid));
    yield put(createUserProfileSuccessAction(data));
    
  } catch(error) {
    yield put(signUpFailureAction(error));
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
  updates[`/colors/${data.uid}/${key}`] = obj;

  try {
    const auth = firebase.database().ref();
    const result = yield call(
      [auth, auth.update],
      updates
    );

    yield put(saveColorSuccessAction());
  } catch(error) {
    yield put(saveColorFailureAction(error))
  }
}

export function* watchGetColors(data) {
  yield getColors(data);
}

export function* watchSaveColor(data) {
  yield saveColor(data);
}

export function* watchSignIn(data) {
  yield signIn(data);
}

export function* watchSignUp(data) {
  yield signUp(data);
}

export function* watchResetPassword(data) {
  yield resetPassword(data);
}

// single entry point to start all our sagas at once
export default function* rootSaga() {
  yield takeEvery('GET_FIREBASE_COLORS', watchGetColors);
  yield takeEvery('SAVE_COLOR', watchSaveColor);
  yield takeEvery('SIGN_IN', watchSignIn);
  yield takeEvery('SIGN_UP', watchSignUp);
  yield takeEvery('RESET_PASSWORD', watchResetPassword);
}