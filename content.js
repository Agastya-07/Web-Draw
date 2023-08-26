const canvas = document.getElementById("drawingCanvas");
const context = canvas.getContext("2d");
const clearbutton = document.getElementById("clearbutton");
const parent  = document.querySelector("#colorpicker")
const moon = parent.querySelector("#moon")
const sun = parent.querySelector("#sun")
const red = parent.querySelector("#red")
const green =  parent.querySelector("#green")
const blue =  parent.querySelector("#blue")
const yellow =  parent.querySelector("#yellow")
const pink =  parent.querySelector("#pink")
const credit = document.querySelector(".credit")



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
  if (ismoon){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width,canvas.height)
  }
  else{
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
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
blue.addEventListener("click", () => {
    context.strokeStyle = "blue";
})
pink.addEventListener("click", () => {
    context.strokeStyle = "pink";
})
yellow.addEventListener("click", () => {
    context.strokeStyle = "yellow";
})

green.addEventListener("click", () => {
    context.strokeStyle = "green";
})
black.addEventListener("click", () => {
    context.strokeStyle = "black";
})
let ismoon = false;
let issun = false;
moon.addEventListener("click", () => {
  ismoon = true;
  issun = false;
  document.body.style.backgroundColor = "black";
  context.strokeStyle = "white";
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
})

sun.addEventListener("click",()=>{
  issun = true;
  ismoon = false;
  document.body.style.backgroundColor = "white";
  context.strokeStyle = "black";
  clearbutton.style.color = "black";
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
})

if(ismoon){
  credit.style.color="yellow"
}
else{
  credit.style.color="black"
}