
// Declaring some global variables

var w;
let img;
let c;

// Preload time is party time

function preload(){ 
  img = loadImage('assets/smiley.jpg');
}

// Create the canvas and setup image as walker

function setup() { 
  createCanvas(640, 360);
  w = new Walker();
  img.loadPixels();
}

// Create draw function 

function draw() {
  background(51);
  w.update();
  w.display();
}

// Create the walker
// The acceleration is now set at time of creation rather 
// than as an update. Magnitude is scaled back also.

function Walker() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.acc = p5.Vector.fromAngle(random(0, PI)) // random using Pi
  this.acc.setMag(0.4);

  this.update = function() {

    // The rotation affects the acceleration of the image
    this.acc.rotate(0.5);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }    
  
  // Draw the image walker

  this.display = function() {
background('#FFFFFF');
    image(img, this.pos.x, this.pos.y, 48, 48);
  }
}






