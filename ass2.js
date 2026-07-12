function login(){

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

if(username==="" || password===""){

document.getElementById("message").innerHTML="Please enter Username & Password";

return;

}

document.getElementById("loginCard").style.display="none";

document.getElementById("dashboard").style.display="block";

document.getElementById("welcome").innerHTML="Welcome, "+username;

updateTime();

setInterval(updateTime,1000);

}

function updateTime(){

let now=new Date();

document.getElementById("datetime").innerHTML=now.toLocaleString();

}

function logout(){

document.getElementById("dashboard").style.display="none";

document.getElementById("loginCard").style.display="block";

document.getElementById("username").value="";

document.getElementById("password").value="";

document.getElementById("message").innerHTML="";

}