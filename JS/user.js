let userInfo = document.querySelector("#user_info");
let name_user = document.querySelector("#name_user");
let links = document.querySelector("#links");

let logout = document.querySelector("#logout");

let email = localStorage.getItem("registration_email");
let userName = localStorage.getItem("registration_username");

//Check in login
if (email) {
  //links.remove();
  userInfo.style.display = "flex";
  name_user.innerHTML = userName;
}
//logout
logout.addEventListener("click", function () {
  localStorage.clear(); //Clear item in Local Syorage

  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
});

