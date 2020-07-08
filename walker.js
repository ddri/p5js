var w;

// Create the canvas

function setup() {
  createCanvas(640, 360);
  w = new Walker();
}

// Create the objects and actions  

function draw() {
  background(51);
  w.walk();
  w.display();
}

// Create the walker. 

function Walker() {
  this.pos = createVector(width/2, height/2);

  // The createVector function declares the vector as a component
  // so the specific variables can be simplified.   
  /* 
  this.x = width/2;
  this.y = height/2;
  */
  
  // Create the action for Walker including random functions
  this.walk = function() {
    this.pos.x = this.pos.x + random(-5, 5);
    this.pos.y = this.pos.y + random(-5, 5);
  }    
  
  // Draw the walker
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
