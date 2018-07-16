import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import firebase from '../firebase';
// import axios from 'axios';

// getting all the colors from /colors/ snapshot
function* getFirebase() {
  const itemsRef = yield firebase.database().ref();

  itemsRef.on('value', function(snapshot) {
    console.log('the snapshot is', snapshot.val());
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });
}

function* saveColor(color) {
  alert('saving this color');
  const data = {
    colorsArr: color.data
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
  yield saveColor(data);
}

// single entry point to start all our sagas at once
export default function* rootSaga() {
  yield all([
    watchFirebase()
  ])

  yield takeEvery('SAVE_COLOR', watchSaveColor);
}