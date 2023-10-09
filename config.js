import firebase from 'firebase';

// adicione SDK do Firebase

const firebaseConfig = {
    apiKey: "AIzaSyBL478PET7t87JWTZVQ72vXzsLvwINTA6M",
    authDomain: "c-60-7b1d8.firebaseapp.com",
    databaseURL: "https://c-60-7b1d8-default-rtdb.firebaseio.com",
    projectId: "c-60-7b1d8",
    storageBucket: "c-60-7b1d8.appspot.com",
    messagingSenderId: "927941557340",
    appId: "1:927941557340:web:4a8aa9e05f3d6663407a99"
  };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();