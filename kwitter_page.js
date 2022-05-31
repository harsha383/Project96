const firebaseConfig = {
    apiKey: "AIzaSyA7i2WiBaQ5uWXO_ZNokLMpg_EwLiUVZqA",
    authDomain: "kwitter-2f233.firebaseapp.com",
    databaseURL: "https://kwitter-2f233-default-rtdb.firebaseio.com",
    projectId: "kwitter-2f233",
    storageBucket: "kwitter-2f233.appspot.com",
    messagingSenderId: "873806357795",
    appId: "1:873806357795:web:d79c8faab104bde6f75896"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}
function logout() {
    window.location = "index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

