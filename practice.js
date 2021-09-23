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
  function addUser()
{
user_name = document.getElementById("user_name").value ;
firebase.database().ref("/").child(user_name). update({
purpose:"adding user"

});
}

