import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCFL-LVxOD96rXYwG1GVw6CDSS2nY-5dbc",
  authDomain: "picker-app-ec8b4.firebaseapp.com",
  databaseURL: "https://picker-app-ec8b4.firebaseio.com",
  storageBucket: ""
}

firebase.initializeApp(firebaseConfig);

console.log(firebase);

export default firebase;


