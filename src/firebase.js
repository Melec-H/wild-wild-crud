import firebase from "firebase/app";
import "firebase/database";


var firebaseConfig = {
  apiKey: "AIzaSyB5qKebz4TgdF7_-g6pw8MwdKHTWmtt3Wc",
  authDomain: "wild-wild-crud.firebaseapp.com",
  databaseURL: "https://wild-wild-crud.firebaseio.com",
  projectId: "wild-wild-crud",
  storageBucket: "wild-wild-crud.appspot.com",
  messagingSenderId: "241437082642",
  appId: "1:241437082642:web:649e6ed7be393f039804cb"
};
// Initialize Firebase

var fireDb = firebase.initializeApp(firebaseConfig);
console.log(firebase.database().ref())

export default fireDb.database().ref();
