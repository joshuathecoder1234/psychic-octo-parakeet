function Start(){
    username = document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location="Main.html";
}
