const firebaseConfig = {
      apiKey: "AIzaSyASSvPu9-_qKVXd1G5J1fBFF4IKR3G6494",
      authDomain: "kwitter-ada09.firebaseapp.com",
      databaseURL: "https://kwitter-ada09-default-rtdb.firebaseio.com",
      projectId: "kwitter-ada09",
      storageBucket: "kwitter-ada09.appspot.com",
      messagingSenderId: "483665328726",
      appId: "1:483665328726:web:7e762e52123112ce0099f7",
      measurementId: "G-YTXZMLM3VN"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}