var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
//console.log(radius);

ctx.translate(radius, radius);
radius = radius * 0.9;
dibujo();

function dibujo() {
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
}