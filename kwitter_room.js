const firebaseConfig = {
    apiKey: "AIzaSyA-Ppr6XZ5biW0SitTFKWsuv6j61Hf_yHU",
    authDomain: "hw-c-91-92-93.firebaseapp.com",
    projectId: "hw-c-91-92-93",
    storageBucket: "hw-c-91-92-93.appspot.com",
    messagingSenderId: "540179621946",
    appId: "1:540179621946:web:39fb4141ffd4fed5c3ad03",
    measurementId: "G-C0YLL4NN9W"
  };
  
  firebase.initializeApp(firebaseConfig);
  function addroom(){
     user_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose : "test kiwer firebase-username"
     });
  }