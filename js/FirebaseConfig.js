var firebaseConfig = {
    apiKey: "AIzaSyA7MTX-KOMD9cKZOgELSTPrVS1INgA5rW4",
    authDomain: "snake-afbd3.firebaseapp.com",
    databaseURL: "https://snake-afbd3.firebaseio.com",
    projectId: "snake-afbd3",
    storageBucket: "snake-afbd3.appspot.com",
    messagingSenderId: "1049925441457",
    appId: "1:1049925441457:web:8c732acba5769d4ba48f90",
    measurementId: "G-9DQ4JQY962"
  };
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
 
 
  db = firebase.firestore();