var firebaseConfig = {
      apiKey: "AIzaSyDYnBIcbH-Nx8nrB3Eq7GjSySwOsCVOcd4",
      authDomain: "kwitter-72d3a.firebaseapp.com",
      databaseURL: "https://kwitter-72d3a-default-rtdb.firebaseio.com",
      projectId: "kwitter-72d3a",
      storageBucket: "kwitter-72d3a.appspot.com",
      messagingSenderId: "997822086821",
      appId: "1:997822086821:web:86196772ed3dea8c3d174c",
      measurementId: "G-9XV8QGQ14V"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
var user_name = localStorage.getItem("User_name");
var room_name = localStorage.getItem("room_name");
function send(){
       msgv = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             username:user_name,
             message:msgv,
             like:0
       });
       document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['username'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button +span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id) {
console.log("Clicked on like button" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updatedLikes = Number(likes) + 1;
console.log(updatedLikes);
firebase.database().ref(room_name).child(message_id).update({
     like:updatedLikes 
});
}

function logOut() {
      localStorage.removeItem("User_Name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}