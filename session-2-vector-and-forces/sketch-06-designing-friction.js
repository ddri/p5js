// Drag force

// Two particles, this could be an array
var particle1;
var particle2;

// Liquid
var liquid;

function setup() {

  createCanvas(640, 360);
  // Create liquid object
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);

  particle1 = new Particle(1, 200, 0);
  particle2 = new Particle(3, 400, 0);
}

function draw() {
  background(127);

  // Draw water
  liquid.display();

  // Is the Mover in the liquid?
  if (liquid.contains(particle1)) {
    // Calculate drag force
    var dragForce = liquid.calculateDrag(particle1);
    // Apply drag force to Mover
    particle1.applyForce(dragForce);
  }

  // Gravity is scaled by mass here!
  var gravity = createVector(0, 0.1 * particle1.mass);
  // Apply gravity
  particle1.applyForce(gravity);

  // Update and display
  particle1.update();
  particle1.display();
  particle1.checkEdges();


  // Is the Mover in the liquid?
  if (liquid.contains(particle2)) {
    // Calculate drag force
    var dragForce = liquid.calculateDrag(particle2);
    // Apply drag force to Mover
    particle2.applyForce(dragForce);
  }

  // Gravity is scaled by mass here!
  var gravity = createVector(0, 0.1 * particle2.mass);
  // Apply gravity
  particle2.applyForce(gravity);

  // Update and display
  particle2.update();
  particle2.display();
  particle2.checkEdges();
}


// Particles


function Particle(m,x,y) {
  this.mass = m;
  this.position = createVector(x,y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);

  // Newton's 2nd law: F = M * A
  // or A = F / M
  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255,127);
    ellipse(this.position.x,this.position.y,this.mass*16,this.mass*16);
  };

  // Bounce off bottom of window
  this.checkEdges = function() {
    if (this.position.y > height) {
      this.velocity.y *= -0.9;  // A little dampening when hitting the bottom
      this.position.y = height;
    }
  };

}


// Liquid


var Liquid = function(x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;

  // Is the Mover in the Liquid?
  this.contains = function(m) {
    var l = m.position;
    return l.x > this.x && l.x < this.x + this.w &&
           l.y > this.y && l.y < this.y + this.h;
  };

  // Calculate drag force
  this.calculateDrag = function(m) {
    // Magnitude is coefficient * speed squared
    var speed = m.velocity.mag();
    var dragMagnitude = this.c * speed * speed;

    // Direction is inverse of velocity
    var dragForce = m.velocity.copy();
    dragForce.mult(-1);

    // Scale according to magnitude
    dragForce.setMag(dragMagnitude);
    return dragForce;
  }

  this.display = function() {
    noStroke();
    fill(50);
    rect(this.x, this.y, this.w, this.h);
  }
}

