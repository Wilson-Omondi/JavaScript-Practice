const canvas = document.querySelector("#draw")
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADASS';
ctx.lineJoin = '#BADASS';
ctx.lineCap = 'round';
ctx.lineWidth = 60;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;


function draw(e) {
  if(!isDrawing) return; // stop the fn from running when they are not moused down.

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX
  lastY = e.offsetY
  hue++;
  
}


canvas.addEventListener('mousedown', (e)=> {
  isDrawing = true;
  lastX = e.offsetX
  lastY = e.offsetY
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> isDrawing = false);
canvas.addEventListener('mouseout', ()=> isDrawing = false);
