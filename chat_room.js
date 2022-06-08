const firebaseConfig = {
    apiKey: "AIzaSyDLwiRI1YsQKrwqtXMINoiEoQSKsSYQ4V8",
    authDomain: "class-100pro.firebaseapp.com",
    databaseURL: "https://class-100pro-default-rtdb.firebaseio.com",
    projectId: "class-100pro",
    storageBucket: "class-100pro.appspot.com",
    messagingSenderId: "1088432343201",
    appId: "1:1088432343201:web:d63e51a2b0a4f834f3c8e0"
  };
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
