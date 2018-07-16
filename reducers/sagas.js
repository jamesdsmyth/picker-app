import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import firebase from '../firebase';
import { SSL_OP_SINGLE_DH_USE } from 'constants';
// import axios from 'axios';

function* getFirebase() {
  const itemsRef = yield firebase.database().ref();

  itemsRef.on('value', function(snapshot) {
    console.log('the snapshot is', snapshot.val());
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });
}

function* saveColor() {
  alert('saving this color');
  // A post entry.
  var postData = {
    colorsArr: [205, 12, 128]
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('colors').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/colors/' + newPostKey] = postData;
  firebase.database().ref().update(updates);
}

export function* watchFirebase() {
  yield getFirebase();
}

// this is called when API_CALL_REQUEST_COLORS is dispatched
export function* watchSaveColor(arr) {

  console.log('dssds', arr)
  yield saveColor();
}

// single entry point to start all our sagas at once
export default function* rootSaga() {
  yield all([
    watchFirebase()
  ])

  yield takeEvery('SAVE_COLOR', watchSaveColor);
}