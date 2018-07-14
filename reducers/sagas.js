import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveColor() {
  alert('saving this bitch in the saga');
}

// this is called when API_CALL_REQUEST_COLORS is dispatched
export function* watchSaveColor() {
  yield saveColor();
}

// single entry point to start all our sagas at once
export default function* rootSaga() {
  yield takeLatest('SAVE_COLOR', watchSaveColor);
}