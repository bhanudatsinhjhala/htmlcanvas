alert("Draw anything you want. :)");
const canvas = document.querySelector("#draw");

const ctx =   canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth=50;

let isDrawing = false;
let lastX=0;
let lastY=0;
let hue=0;
let direction = true;

function isDraw(e){
  if(!isDrawing) return; //stop the fn from running when the mouse is not down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  lastX =e.offsetX;
  lastY = e.offsetY;
  ctx.stroke();
  hue++;
  if(hue >= 360){
    hue=0;
  }

  if(ctx.lineWidth >=50 || ctx.lineWidth <=1){
    direction = !direction;
  }
  if(direction == true){
    ctx.lineWidth++;
  }else{
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousemove", isDraw);
canvas.addEventListener("mousedown", (e) => {
    isDrawing= true
    lastX =e.offsetX;
    lastY = e.offsetY;
  });
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
