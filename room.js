var firebaseConfig = {
    apiKey: "AIzaSyDNh3wV6e0y5bDYF_Fgkr0b1wZ0VdwbxPs",
    authDomain: "tango-70390.firebaseapp.com",
    databaseURL: "https://tango-70390-default-rtdb.firebaseio.com",
    projectId: "tango-70390",
    storageBucket: "tango-70390.appspot.com",
    messagingSenderId: "14275328794",
    appId: "1:14275328794:web:abca5824451d37b0af8aa3"
  };
  
  // Initialize Firebase
 firebase. initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("username");
cat_name=localStorage.getItem("category");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
document.getElementById("name").innerHTML=cat_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("room name-" + Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();


function addroom(){
    roomname=document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
        purpose:"adding user"
    });
    localStorage.setItem("room_name",roomname);
}

function redirecttoroomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="message.html";
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

