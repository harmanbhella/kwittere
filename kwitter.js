
function login(){
    var username=document.getElementById("username").value;
    localStorage.setItem("user",username);
    window.location="kwitter_room.html"
}