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

// Vector subtraction gives the location of mouse minus position.
// Rather than constantly updating the vectors and mouse movement
// this updates a new unique vector.
// Also note the p5 instance is static, rather than called on an
// object but on p5 itself. 
  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.mul(0.01);

    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }    
  
  // Draw the walker
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}