import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import firebase from '../firebase';
import store from '../reducers/combinedReducers';
import { getColorSuccessAction, getColorFailureAction } from '../actions/actions'

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
  // const { email, password} = data;
  // firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;

  //   console.log('there was an error', error);
  //   // ...
  // });
}

function* createUser() {
  const email = 'bdbb@bbb.com';
  const password = '211212121';
  firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
    console.log(response);
    alert('created');
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function* saveColor(color) {
  const data = {
    rgb: color.data
  };

  // Get a key for a new color
  const newPostKey = firebase.database().ref().child('colors').push().key;

  // add the color to the list /colors/
  let updates = {};
  updates['/colors/' + newPostKey] = data;
  firebase.database().ref().update(updates);
}

export function* watchFirebase() {
  yield getFirebase();
}

// this is called when API_CALL_REQUEST_COLORS is dispatched
export function* watchSaveColor(data) {

  console.log('inside watch sign in')
  yield saveColor(data);
}

export function* watchSignIn(data) {
  yield signIn(data);
}

// single entry point to start all our sagas at once
export default function* rootSaga() {
  yield all([
    watchFirebase()
  ])

  yield takeEvery('SAVE_COLOR', watchSaveColor);
  yield takeLatest('SIGN_IN', watchSignIn);
}