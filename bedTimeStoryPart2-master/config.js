import Firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAMW87I3aehUsTmQ-LXmNvxw8QZ1e0Xwto",
    authDomain: "bed-time-stories-805e9.firebaseapp.com",
    databaseURL: "https://bed-time-stories-805e9.firebaseio.com",
    projectId: "bed-time-stories-805e9",
    storageBucket: "bed-time-stories-805e9.appspot.com",
    messagingSenderId: "74595764582",
    appId: "1:74595764582:web:9a930873bddda1e548e0a7",
    measurementId: "G-1X269F7P47"
  };
  // Initialize Firebase
  let app= Firebase.initializeApp(firebaseConfig);
  export const db = app.database();