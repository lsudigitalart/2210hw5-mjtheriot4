// Micah Theriot Copywright 2016

// wall drawing 106:“Arcs from the midpoints of two sides of the wall.”

function setup(){
  createCanvas(1200,600)
  background(0);
  noFill();
}

var i = 0;
var w = .5;
var a = 200;
function draw(){
  blendMode(ADD);
  strokeWeight(w);
  stroke(255,0,0,a);
  ellipse(0, height/2, i)
  stroke(0,0,255,a);
  ellipse(width, height/2, i)
  // i+=15;
  i += 20 + w * 3;
  w += .1;
  a -= 2.5;
  if (i > 2 * width) {noLoop()}
}
