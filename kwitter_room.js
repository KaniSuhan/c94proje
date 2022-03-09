
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA5os8PmGg0O6LNqyXM7-A846rGlkJlFIw",
      authDomain: "c93kwitter-94b51.firebaseapp.com",
      projectId: "c93kwitter-94b51",
      databaseURL: "https://c93kwitter-94b51-default-rtdb.firebaseio.com",
      storageBucket: "c93kwitter-94b51.appspot.com",
      messagingSenderId: "574753247721",
      appId: "1:574753247721:web:bf5eb84e3d5522960fbb78"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
