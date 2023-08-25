const canvas = document.getElementById("drawingCanvas");
const context = canvas.getContext("2d");
const clearbutton = document.getElementById("clearbutton");
const parent  = document.querySelector("#colorpicker")

const red = parent.querySelector("#red")
const green =  parent.querySelector("#green")

// Resize the canvas to match the viewport size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = "black";
let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  const { offsetX, offsetY } = getMousePos(canvas, e);
  context.beginPath();
  context.moveTo(offsetX, offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  const { offsetX, offsetY } = getMousePos(canvas, e);
  context.lineTo(offsetX, offsetY);
  context.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  context.closePath();
});

function clearcanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

clearbutton.addEventListener("click", clearcanvas);


// Function to get correct mouse coordinates
function getMousePos(canvas, evt) {
  const rect = canvas.getBoundingClientRect();
  return {
    offsetX: evt.clientX - rect.left,
    offsetY: evt.clientY - rect.top
  };
}


red.addEventListener("click", () => {
    context.strokeStyle = "red";
})

green.addEventListener("click", () => {
    context.strokeStyle = "green";
})
black.addEventListener("click", () => {
    context.strokeStyle = "black";
})