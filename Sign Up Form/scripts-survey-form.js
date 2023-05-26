$(document).ready(function(){
    
    $(".text").focusout( function() {
        $(this).val($(this).val().toUpperCase());
    })

    $(".block-input")
    .on("invalid", function() {
        $(this).css("border", "3px solid red")
    })
    .focusout( function() {
        $(this).css("border", "2px solid black")
    });


let passwordField = document.getElementById("password");
let passwordRepeat = document.getElementById("password2");

$("#password").focusout(passwordVerify);
$("#password2").focusout(passwordRepeatVerify);

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

function passwordRepeatVerify() {
    if (passwordRepeat.value == passwordField.value) {
        passwordRepeat.style.border = "2px solid lightgreen";
    }
    else {
        passwordRepeat.style.border = "2px solid red";
    }
}
  });
