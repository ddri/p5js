
// First section is the environment

var particle1;
var particle2;

function setup() {
    createCanvas(640, 360);
    particle1 = new Particle(200, 100, 3);
    particle2 = new Particle(400, 100, 1);
}

function mousePressed() {
    console.log(particle1.vel.y + "  " + particle2.vel.y);
}


function draw() {
    background(51);

    // This variable applies gravity and wind as a force

    var wind = createVector(0.1, 0);

    var gravity1 = createVector(0, 0.2*particle1.mass); 
    particle1.applyForce(gravity1);    
    var gravity2 = createVector(0, 0.2*particle2.mass); 
    particle2.applyForce(gravity2);


    // The mouseIsPressed condition applies the 
    // wind force only if the mouse is clicked

    if (mouseIsPressed) {
    particle1.applyForce(wind);
    particle2.applyForce(wind);    
    }

    // could use a random to create drift in the fall
    // instead of the set x value
    // var gravity = createVector(random(-1,1),0.1)

    particle1.update();
    particle1.edges();
    particle1.display();
    particle2.update();
    particle2.edges();
    particle2.display();  
}


// Second section is the particle physics

function Particle(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;

    this.applyForce = function(force) {
        var f = force.copy();
        f.div(this.mass);
        this.acc.add(f);
    }

    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        // Sets back to zero to check force accumulation
        // so at any point in time the object can
        // be subject to the forces present at that time

        this.acc.set(0, 0);
    }

    this.display = function() {
        fill(255);
        stroke(255);
        ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10,);
    }
    // This tells the particle to react to the edges
    // of the canvas, and what it should do when it 
    // hits it. In this case, to reverse the vector.

    this.edges = function() {
        if (this.pos.y > height) {
            this.vel.y *= -1;
            this.pos.y = height;
        }

         if (this.pos.x > width) {
            this.vel.x *= -1;
            this.pos.x = width;
        }

    }
}