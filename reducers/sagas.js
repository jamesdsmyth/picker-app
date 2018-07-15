import { takeLatest, takeEvery, all } from 'redux-saga/effects';
// import axios from 'axios';

// firebase is now available whenever we need it.
import firebase from '../firebase';

function* getFirebase() {
  console.log('here we will call firebase');
}

function* saveColor() {
  alert('saving this bitch in the saga');
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