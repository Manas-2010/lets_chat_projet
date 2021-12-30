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
  document.getElementById("username").innerHTML = 'Wellcome '+ username+'!';
function addRoom(){
  room_name = document.getElementById("text").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
}

function getData(){
  firebase.database().ref("/").on('value',function(snapshot){
    document.getElementById("output").innerHTML ="";
    snapshot.forEach(function(childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
          //Start code
          console.log("RoomName = "+Room_names); 
          row = "<div class='room_div' id="+Room_name+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End code
        });});}
getData();


function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "lets_chat_page.html";
}