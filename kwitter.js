

function adduser(){
   username=document.getElementById("username").value;
   localStorage.setItem("username",username);
   window.location="category.html";
}