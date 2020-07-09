var w;

// Create the canvas

function setup() {
  createCanvas(640, 360);
  w = new Walker();
}

// Create the objects and actions  

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
  this.acc = p5.Vector.fromAngle(random(0, TWO_PI))
  this.acc.setMag(0.2);

  this.update = function() {

    // This exampel is purely to explore direction specific by Pi
    // in the fromAngle function. And learn how to set it
    // randomly.
    this.acc.rotate(0.1);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }    
  
  // Draw the walker
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}