// RGB Colors

// variables to store html elements

let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
let widthInEl = document.getElementById("widthIn");
let heightInEl = document.getElementById("heightIn");
// Event Listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
// event functiom
function rgbPreview() {
  // Input: get red green blue values
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  // Validate Colors (constrain colors between 0 - 255)
  // Check rValue
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }

  // Check gValue
  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  // Check bValue
  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  // proccess: build rgb string
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output : display rbg string and update color

  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}

widthInEl.addEventListener("change", changeSize);
heightInEl.addEventListener("change", changeSize);

function changeSize() {
  let wValue = +widthInEl.value;
  let hValue = +heightInEl.value;

  if (wValue < 50) {
    wValue = 50;
    widthInEl.value = 50;
  } else if (wValue > 400) {
    wValue = 400;
    widthInEl.value = 400;
  }

  if (hValue < 50) {
    hValue = 50;
    heightInEl.value = 50;
  } else if (hValue > 200) {
    hValue = 200;
    heightInEl.value = 200;
  }

  displayEl.style.width = wValue + "px";
  displayEl.style.height = hValue + "px";
}

// Black btn

document.getElementById("blckbtn").addEventListener("click", blackColor);

function blackColor() {
  document.getElementById("display").style.background = `rgb(0, 0, 0)`;
  document.getElementById("rgbStrOut").innerHTML = `rgb(0, 0, 0)`;
}

// White btn

document.getElementById("whtbtn").addEventListener("click", whiteColor);

function whiteColor() {
  document.getElementById("display").style.background = `rgb(255, 255, 255)`;
  document.getElementById("rgbStrOut").innerHTML = `rgb(255, 255, 255)`;
}
