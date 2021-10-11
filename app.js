let canvas = document.getElementById("draw");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#666";
ctx.strokeStyle = "#666";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.lineJoin = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastY = e.offsetY;
  lastX = e.offsetX;
  hue++;
  if (ctx.lineWidth >= 70 || ctx.lineWidth <= 10) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastY = e.offsetY;
  lastX = e.offsetX;
  ctx.stroke();
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

canvas.addEventListener("touchstart", (e) => {
  isDrawing = true;
  lastY = e.offsetY;
  lastX = e.offsetX;
  ctx.stroke();
});
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", () => (isDrawing = false));
