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

function Walker() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);

// Create the acceleration for the vector
  this.update = function() {
    this.acc = createVector(random(-1,1), random(-1,1));

  
  // Create the action for Walker 
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
