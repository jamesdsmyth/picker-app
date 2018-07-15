import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import firebase from '../firebase';
// import axios from 'axios';

// firebase is now available whenever we need it.

function* getFirebase() {
  // console.log('here we will call firebase');
  const itemsRef = yield firebase.database().ref();
  // console.log(itemsRef);
  // console.log('innnnn')

  itemsRef.on('value', function(snapshot) {
    console.log('BRESHHH', snapshot.val());
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });
}

function* saveColor() {
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
export function* watchSaveColor() {
  yield saveColor();
}

// single entry point to start all our sagas at once
export default function* rootSaga() {
  yield all([
    watchFirebase()
  ])
  // console.log('RUNNING ROOTSAGA MIDDLEWARE');
  // yield takeEvery('GET_FIREBASE', watchFirebase)
  // yield takeLatest('SAVE_COLOR', watchSaveColor);
}