import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNzVBjGyAY-KQCdaP8mYbQz3p9h4swi9o",
    authDomain: "backend-exercice6.firebaseapp.com",
    databaseURL: "https://backend-exercice6-default-rtdb.firebaseio.com",
    projectId: "backend-exercice6",
    storageBucket: "backend-exercice6.appspot.com",
    messagingSenderId: "222719759343",
    appId: "1:222719759343:web:2b6f5eba8e62384c599c1a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;