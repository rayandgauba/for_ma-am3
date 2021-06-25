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
    var user_name = localStorage.getItem("User_Name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name;

      function addRoom() {
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"Adding Room Name."
            });
            localStorage.setItem("room_name" , room_name);
            window.location = "kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name" + Room_names);
row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}