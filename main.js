
function log_in(){
    username = document.getElementById("username").value;
localStorage.setItem("username", username);
window.location = "let`s_chat_room.html"
}
