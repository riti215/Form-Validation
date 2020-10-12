const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const c_password = document.getElementById('c_password');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

const sendData = (usernameVal, sRate, count) => {
    if (sRate === count) {
        swal("Welcome! " + usernameVal, "Account created successfully", "success");
    }
}
//for final data validation
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);
        } else {
            return false;
        }
    }
}

function checkInputs() {
    //trim to remove whitespaces
    const usernameVal = username.value.trim()
    const phoneVal = phone.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const c_passwordVal = c_password.value.trim()


    if (usernameVal === "") {
        setError(username, "Required");
    } else {
        setSuccess(username);
    }

    if (emailVal === "") {
        setError(email, "Required");
    } else if (!isEmail(emailVal)) {
        setError(email, "Invalid email");
    } else {
        setSuccess(email)
    }

    if (phoneVal === "") {
        setError(phone, "Required");
    } else if (phoneVal.length !== 10) {
        setError(phone, "Invalid phone")
    } else {
        setSuccess(phone);
    }

    if (passwordVal === "") {
        setError(password, "Required");
    } else {
        setSuccess(password);
    }

    if (c_passwordVal === "") {
        setError(c_password, "Required");
    } else if (c_passwordVal !== passwordVal) {
        setError(c_password, "Password does not match")
    } else {
        setSuccess(c_password);
    }
    successMsg(usernameVal)
}

function setError(input, message) {
    const formControl = input.parentElement;     // .form-control
    const small = formControl.querySelector('small');

    //add error class
    formControl.className = "form-control error";

    // add error msg inside small
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}