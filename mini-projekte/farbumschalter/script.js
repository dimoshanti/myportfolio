let colorArray = ["lightgray", "lightblue", "lightgreen", "lightcoral"];
let colorIndex = 0;
let buttonClick = document.getElementById("changeColorButton");

function changeBGC() {
  document.body.style.backgroundColor = colorArray[colorIndex];
  colorIndex++;

  if (colorIndex >= colorArray.length) {
    colorIndex = 0;
  }
}

buttonClick.addEventListener("click", changeBGC);
