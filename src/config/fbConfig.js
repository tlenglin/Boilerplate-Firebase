import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase

//var config on google firebase account 

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase