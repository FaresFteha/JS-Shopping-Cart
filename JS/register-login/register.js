//Register User 

//Defin varisbles by ID
let registration_user_name = document.getElementById("registration_username");
let registration_user_email = document.getElementById("registration_email");
let registration_user_password = document.getElementById("registration_password");

let registration = document.getElementById("sign_up");

//Event to function 
registration.addEventListener("click" , registerValidation);

function registerValidation(e){
    e.preventDefault();
    if (registration_user_name.value === "" || registration_user_email.value === "" || registration_user_password.value === "") {
        alert("Please Data is Required");
    }else{
        //Save Data in Local Storage
        localStorage.setItem('registration_username' , registration_user_name.value);
        localStorage.setItem('registration_email' , registration_user_email.value);
        localStorage.setItem('registration_password' , registration_user_password.value);

        setTimeout(() => {
            window.location = "login.html" //go to login page
        }, 1500);
    }

}