const firebaseConfig = {
    apiKey: "AIzaSyCiq6_KBM_I6dglRpa_OOGVahd54th0iBc",
    authDomain: "lets-chat-19581.firebaseapp.com",
    databaseURL: "https://lets-chat-19581-default-rtdb.firebaseio.com",
    projectId: "lets-chat-19581",
    storageBucket: "lets-chat-19581.appspot.com",
    messagingSenderId: "164275295070",
    appId: "1:164275295070:web:62899d4eaf91dae3f5b5cf"
  };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");

    function addRoom(){
   room_name = document.getElementById("text").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });
   localStorage.setItem("room_name", room_name);
   window.location = "lets_chat_message.html";
    }

    function getData(){
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
      var Room_names = childKey;
      //Start code
      console.log("RoomName = "+Room_names);
      row = "<div class='room_name' style='color='black'' id="+Room_names+"onclick= redirect(this.id)>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
      getData();
 function redirect(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets_chat_message.html";
 }

function log_out(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}