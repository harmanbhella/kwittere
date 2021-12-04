
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA0Oqxt5XyKLrGtLwD4l1KhsJXlGmG61SI",
      authDomain: "kwitter-48f34.firebaseapp.com",
      databaseURL: "https://kwitter-48f34-default-rtdb.firebaseio.com",
      projectId: "kwitter-48f34",
      storageBucket: "kwitter-48f34.appspot.com",
      messagingSenderId: "627424921998",
      appId: "1:627424921998:web:a06a128a1dd6a8f1457cdf",
      measurementId: "G-MTM0BGQG63"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username = localStorage.getItem("user");
document.getElementById("username").innerHTML = "Welcome " + username + "!";
function adduser() {
      var roomname = document.getElementById("roomname").value;
      localStorage.setItem("room name", roomname);
      firebase.database().ref("/").child(roomname).update({
            _name:"harman"
      });
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
function logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("room name");
      window.location = "index.html";
}