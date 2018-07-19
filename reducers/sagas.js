import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import firebase from '../firebase';
import store from '../reducers/combinedReducers';
import { 
    getColorSuccessAction, 
    getColorFailureAction,
    signInSuccessAction } from '../actions/actions'

// getting all the colors from /colors/ snapshot
function* getFirebase() {
  const itemsRef = yield firebase.database().ref();
  
  itemsRef.on('value', (snapshot) => {
    store.dispatch(getColorSuccessAction(snapshot.val()));
  }, (errorObject) => {
    store.dispatch(getColorFailureAction());
  });
}


// so from signing a user in, we either need to save the color, or show them their colors.






function* signIn(data) {

  debugger;

  console.log('yielding this in sign in', data);
  firebase.auth().signInWithEmailAndPassword(data.data.email, data.data.password).then(response => {
    alert('signing in');
    console.log(response);
    store.dispatch(signInSuccessAction(response));



    // now need to call another function here


    // now from here we get the colors but pass the user ID.




  }).catch(error => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log('there was an error', error);
    alert('Please try again');
    // ...
  });
}

function* signUp(data) {
  debugger;
  firebase.auth().createUserWithEmailAndPassword(data.data.email, data.data.password).then((response) => {
    // from here we need to dispatch an action that says successful sign up and take them to the new page
    // store.dispatch()

    console.log(response.user.uid);

    signIn(data)
    // WITH THE RESPONSE ID KEY WE NEED TO CREATE A LIST WHERE THIS USER CAN STORE THEIR COLORS AND NAME ETC
    // response.uid


  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(error);
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
  console.log('now in watchSignIn', data)
  yield signIn(data);
}

export function* watchSignUp(data) {
  yield signUp(data);
  yield signIn(data);
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