// Get Data form LocalStorage
let get_user = localStorage.getItem("registration_username");
let get_email = localStorage.getItem("registration_email");

// Variables
let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");

// Setting Values of Input
userInput.value = get_user;
userEmailInput.value = get_email;

// Events
editForm.addEventListener("submit", editProfileData);

function editProfileData(e) {
  e.preventDefault();

  localStorage.setItem("registration_username", userInput.value);
  localStorage.setItem("registration_email", userEmailInput.value);

  setTimeout(() => {
    window.location = "profile.html";
  }, 500);
}