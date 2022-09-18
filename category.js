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



function drama(){
    localStorage.setItem("category","drama");
    window.location="room.html";
}

function anime(){
    localStorage.setItem("category","anime");
    window.location="room.html";
}

function action(){
    localStorage.setItem("category","action");
    window.location="room.html";
}

function comedy(){
    localStorage.setItem("category","comedy");
    window.location="room.html";
}

function fantasy(){
    localStorage.setItem("category","fantasy");
    window.location="room.html";
}

function thrill(){
    localStorage.setItem("category","thrill");
    window.location="room.html";
}

function romance(){
    localStorage.setItem("category","romance");
    window.location="room.html";
}

function horror(){
    localStorage.setItem("category","horro");
    window.location="room.html";
}

function mystery(){
    localStorage.setItem("category","mystery");
    window.location="room.html";
}
