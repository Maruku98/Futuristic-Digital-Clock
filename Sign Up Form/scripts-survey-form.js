let userTextInputs = document.querySelectorAll(".text");

userTextInputs.forEach((input) => {
    input.addEventListener("focusout", () => {
        input.value = input.value.toUpperCase();
    });
});

let userInputs = document.querySelectorAll(".block-input");

userInputs.forEach((input) => {
    input.addEventListener("invalid", () => {
        input.style.border = "3px solid red";
    });
    input.addEventListener("focusout", () => {
        input.style.border = "2px solid black";
    })
});

let passwordField = document.getElementById("password");
let passwordRepeat = document.getElementById("password2");

passwordField.addEventListener("focusout", passwordVerify);

function passwordVerify() {
    let userInputPassword = passwordField.value;
    let myNumbersRegex = /\d/g;
    let myLowerRegex = /[a-z]/g;
    let myUpperRegex = /[A-Z]/g;

    if (myNumbersRegex.test(userInputPassword) &&
        myLowerRegex.test(userInputPassword)  &&
        myUpperRegex.test(userInputPassword))
    {
        passwordField.style.borderColor = "lightgreen";
        passwordField.style.borderWidth = "3px";
    }
    else {
        passwordField.style.borderColor = "black";
        passwordField.style.borderWidth = "2px";
    }
}

passwordRepeat.addEventListener("focusout", passwordRepeatVerify);

function passwordRepeatVerify() {
    if (passwordRepeat.value == passwordField.value) {
        passwordRepeat.style.border = "2px solid lightgreen";
    }
    else {
        passwordRepeat.style.border = "2px solid red";
    }
}
