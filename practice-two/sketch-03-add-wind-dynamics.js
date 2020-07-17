
// First section is the environment

var particle;

function setup() {
	createCanvas(640, 360);
	particle = new Particle();
}

function draw() {
	background(51);

    // This variable applies gravity as a force
    var gravity = createVector(0.3, 0.1);

    // This variable applies wind as a force
    // The x value as an example here blows to the right 
    var wind = createVector(0.5, 0);


    particle.applyForce(gravity);
    particle.applyForce(wind);
  
// could use a random to create drift in the fall
// instead of the set x value
// var gravity = createVector(random(-1,1),0.1)

	particle.update();
	particle.edges();
	particle.display();
}



// Second section is the particle physics
// This is interesting as it defines Newton's
// second law, although simplified as acceleration
// equals force.

function Particle() {
	this.pos = createVector(width / 2, height/2);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);

	this.applyForce = function(force) {
		this.acc = force;
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	this.display = function() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}

    this.edges = function() {
    	if (this.pos.y > height) {
    		this.vel.y *= -1;
    		this.pos.y = height;
    	}
    }
}