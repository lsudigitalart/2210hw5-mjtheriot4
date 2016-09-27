// practice from chapter 5
var x = 0;
var easing = 0.1;

function setup() {
  createCanvas( 600, 600);
  blendMode(ADD);
}

function draw() {
  background(0);
  // x = x + (mouseX - x) * easing;
  // ellipse( x, 40, 12, 12);
  //  //println( targetX + " : " + x);
  fill(255,0,0,85);
  ellipse (1/3 * width,2/3 * height,300);
  fill(0,255,0,85);
  ellipse (2/3 * width,2/3 * height,300);
  fill(0,0,255,85);
  ellipse (1/2 * width,1/2.5 * height,300);
}
