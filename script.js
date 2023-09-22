
//TIPS: Use console.log to check if the variable works well
// console.log(css);
// console.log(color1);
// console.log(color2);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Function to generate a random color value
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// //Function to set gradient color background
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

// Create the "Random" button
var addRandomButton = document.createElement("button");
addRandomButton.innerHTML = "Random";
color2.insertAdjacentElement("afterend", addRandomButton);

// Event listener for the "Random" button
addRandomButton.addEventListener("click", function () {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
});


//Make any selected color as the background-color
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
