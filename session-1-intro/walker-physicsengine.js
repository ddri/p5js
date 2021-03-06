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

// Create the walker. 

function Walker() {
  this.pos = createVector(width/2, 0);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0.1);

  
  // Create the action for Walker including random functions
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

  }    
  
  // Draw the walker
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
