
// Set up the variables and relationships

var particle;
var attractor;

function setup() {
	createCanvas(640, 360);
	particle = new Particle(400, 50, 1);
	attractor = new Attractor(width/2, height/2);
}

function draw() {
	background(51);


    var force = attractor.calculateAttraction(particle)
    particle.applyForce(force);
    particle.update();


    particle.display();
    attractor.display();

    }


// Attractor

var Attractor = function() {
  this.pos = createVector(width/2, height/2);
  this.mass = 20;
  this.G = 1;

  this.calculateAttraction = function(p) {
    // Calculate direction of force
    var force = p5.Vector.sub(this.pos, p.pos);
    // Distance between objects
    var distance = force.mag();
    // Artificial constraint
    distance = constrain(distance, 5, 25);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    var strength = (this.G * this.mass * p.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  }

  // Method to display
  this.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.mass*2, this.mass*2);
  }
}


// Particle

var Particle = function() {
  this.pos = createVector(400, 50);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.mass = 1;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  };

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.pos.x, this.pos.y, this.mass*16, this.mass*16);
  };
}

