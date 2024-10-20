let countdown = document.getElementById("countdown");
let reset = document.getElementById("reset");
let start = document.getElementById("start");
let setCountValues = document.getElementById("setcount");
let startvalue = document.getElementById("startvalue");
let endvalue = document.getElementById("endvalue");
let userEndValue;
let userStartValue;
function setcount() {
  userStartValue = parseInt(prompt("Enter countdown start value: "));
  userEndValue = parseInt(prompt("Enter countdown end value: "));
  startvalue.innerHTML = userStartValue;
  endvalue.innerHTML = userEndValue;
}

function resetCount() {
  console.log(userStartValue);
  countdown.innerHTML = 0;
  startvalue.innerHTML = 0;
  endvalue.innerHTML = 0;
}

function startCount() {
  console.log(userStartValue, userEndValue);
  if (Number.isInteger(userStartValue) && Number.isInteger(userEndValue)) {
    // console.log("number")
    // console.log(userStartValue)
    // console.log(userEndValue)

    let counting = setInterval(() => {
      if (userStartValue <= userEndValue) {
        countdown.innerHTML = userStartValue;
        console.log(userStartValue);
        userStartValue++;
        reset.setAttribute("disabled", true);
        setCountValues.setAttribute("disabled", true);
      } else {
        clearInterval(counting);
        reset.removeAttribute("disabled");
        setCountValues.removeAttribute("disabled");
      }
    }, 1000);
    
  } else {
    alert("Please Enter Number To Start");
  }
}
