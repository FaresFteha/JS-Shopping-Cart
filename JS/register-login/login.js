let emailLogin = document.getElementById("login_email");
let passwordLogin = document.getElementById("login_password");
let loginBtn = document.querySelector("#sign_in");

//Local Storage get Item
let getEmail = localStorage.getItem("registration_email");
let getPassword = localStorage.getItem("registration_password");

loginBtn.addEventListener("click", loginCheck);

function loginCheck(e) {
  e.preventDefault();
  if (emailLogin.value == "" || passwordLogin.value == "") {
    alert("Please Data is Required");
  } else {
    if (
      getEmail &&
      getEmail.trim() === emailLogin.value.trim() &&
      getPassword &&
      getPassword === passwordLogin.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
        alert("username or password is wrong !!");
      console.log("username or password is wrong !!");
    }
  }
}
