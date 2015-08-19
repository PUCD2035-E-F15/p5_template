function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
 
  
}

function draw() {
  // draw stuff here
  background(10);
  fill(255, 255, 0);
  stroke(255, 0, 0);
  var w = 800;
  var h = 800;
  ellipse(w/2, h/2, w, h);
}
