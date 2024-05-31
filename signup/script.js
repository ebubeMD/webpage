//FORM PASSWORD SHOW AND HIDE
const pswrdField = document.querySelector(".form input[type='password']");
toggleBtn = document.querySelector(".form .field i");

toggleBtn.onclick = () => {
    if (pswrdField.type === "password") {
        pswrdField.type = "text";
        toggleBtn.classList.add("active");
    } else {
        pswrdField.type = "password";
        toggleBtn.classList.remove("active");
    }
}

//FORM VALIDATION 
const form = document.querySelector("form");
const errorText = document.querySelector(".error-txt");
const firstName = form.querySelector(".first-name");
const lastName = form.querySelector(".last-name");
const email = form.querySelector(".email");
const password = form.querySelector(".password");
const submitBtn = form.querySelector(".submit-btn");


errorText.innerHTML = "";

function validate () {
    
    const isValidEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const isLetters = /^[A-Za-z]+$/;
    
    if( (firstName, lastName, email, password).value === "") {
        errorText.innerHTML = "All input fields are required!";
        errorText.style.display = "block";
        errorText.classList.remove("valid");
        errorText.classList.toggle("error");
    }
    
    else if(!firstName.value.match(isLetters)) {
        errorText.innerHTML = "Type in your first name correctyly!";
        errorText.style.display = "block";
        errorText.classList.remove("valid");
        errorText.classList.toggle("error");
        firstName.focus();
    }

    else if(firstName.value.length < 2) {
        errorText.innerHTML = "name length should be up to 2 or more letters!";
        errorText.style.display = "block";
        errorText.classList.remove("valid");
        errorText.classList.toggle("error");
        firstName.focus();
    }
    
    else if(!lastName.value.match(isLetters)) {
        errorText.innerHTML = "Type in your last name correctyly!";
        errorText.style.display = "block";
        errorText.classList.remove("valid");
        errorText.classList.toggle("error");
        lastName.focus();
    }
    
    else if(lastName.value.length < 2) {
        errorText.innerHTML = "name length should be up to 2 or more letters!";
        errorText.style.display = "block";
        errorText.classList.remove("valid");
        errorText.classList.toggle("error");
        lastName.focus();
    }

    else if(!email.value.match(isValidEmail)) {
        errorText.innerHTML = "Please enter a valid email!";
        errorText.style.display = "block";
        errorText.classList.remove("valid");
        errorText.classList.toggle("error");
        email.focus();
    }

    else if(password.value.length < 6) {
        errorText.innerHTML = "Password length must be up to 6 or more characters!";
        errorText.style.display = "block";
        errorText.classList.remove("valid");
        errorText.classList.toggle("error");
        password.focus();
    }

    else {  
        errorText.innerHTML = "You have signed up successfully";
        errorText.style.display = "block";
        errorText.classList.add("valid");
        errorText.classList.remove("error");
        
        document.location = "#";
        
        setTimeout( () => {
            errorText.style.display = "none";
            errorText.innerHTML = "";
            document.location = "login.html";
        }, 1500);
        
    }
    
}

submitBtn.addEventListener("click", () => {
    validate();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});