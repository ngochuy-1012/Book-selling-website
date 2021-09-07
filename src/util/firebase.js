//import firebase from "firebase"
import firebase from 'firebase/app';
import 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyDPaNvSF3AeXLIEsNaaWkRLPNXZQBcdahM",
  authDomain: "books-store-385b8.firebaseapp.com",
  databaseURL: "https://books-store-385b8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "books-store-385b8",
  storageBucket: "books-store-385b8.appspot.com",
  messagingSenderId: "646994402231",
  appId: "1:646994402231:web:9e7bb053ba1c513c83a632",
  measurementId: "G-3T20GZ2L58"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;

