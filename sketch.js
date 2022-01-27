var pelota = {
  x:20,
  y:30,
  r:30,
  velX:0,
  VelY:0,
  color:["red", "green", "blue", "black"]
}
var E;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  E = Math.round(random(0,3))
  fill(pelota.color[0]);
  circle(pelota.x, pelota.y, pelota.r);
  pelota.x = pelota.x + pelota.velX
  pelota.y = pelota.y + pelota.velY
}