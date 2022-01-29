const firebaseConfig = {
      apiKey: "AIzaSyCWHlxwDYzQdirEX_enB5FG9LPE7g5TNqY",
      authDomain: "kwitter-app-2b143.firebaseapp.com",
      databaseURL: "https://kwitter-app-2b143-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-2b143",
      storageBucket: "kwitter-app-2b143.appspot.com",
      messagingSenderId: "1049113890336",
      appId: "1:1049113890336:web:eb2ce10451f050137e3645",
      measurementId: "G-Z7XBXX00QQ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom()
{
 room_name=document.getElementById("room_name").value;
 
 firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"
 });

 localStorage.setItem("room_name",room_name);

 window.location="kwitter_page.html";


} 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-" +room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoom(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
