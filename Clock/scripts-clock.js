//GET NUMBERS AND THE BUTTON AND STORE THEM INTO VARIABLES
let clockNumbers = document.querySelectorAll(".clock-integers")
let hourHours = clockNumbers[0];
let hourMinutes = clockNumbers[1];
let hourSeconds = clockNumbers[2];
let clockButton = document.getElementById("button");
let clock = document.querySelector("#clock");



clockButton.addEventListener("click", futuristicClock);

function futuristicClock() {
  
  clockButton.innerText = "CLOCK ON";

  clockNumbers.forEach((element) => {  //STYLE CHANGES
    element.style.color = "#FA0060";
  });
  clock.style.borderColor = "#FA0060";

  let date = new Date();        //GET CURRENT HOURS, MINUTES, AND SECONDS
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  //SET INITIAL TIME BASED ON CURRENT TIME
  hourHours.innerHTML = hours.toString().padStart(2, "0");
  hourMinutes.innerHTML = minutes.toString().padStart(2, "0");
  hourSeconds.innerHTML = seconds.toString().padStart(2, "0");

  var timeout = setTimeout(futuristicClock, 1000);
};
