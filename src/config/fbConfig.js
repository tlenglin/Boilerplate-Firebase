import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDfDGJbIwl-_C8rA32gMDnePj4b-KsBaDU",
    authDomain: "tuto-marioplan-3628a.firebaseapp.com",
    databaseURL: "https://tuto-marioplan-3628a.firebaseio.com",
    projectId: "tuto-marioplan-3628a",
    storageBucket: "tuto-marioplan-3628a.appspot.com",
    messagingSenderId: "929148821089"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase