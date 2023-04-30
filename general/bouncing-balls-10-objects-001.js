let circles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
  ellipseMode(CENTER);

  // Create circles
  for (let i = 0; i < 10; i++) {
    let c = new Circle(random(width), random(height), random(20, 50), [random(255), random(255), random(255)]);
    circles.push(c);
  }
}

function draw() {
  background(255, 20);

  // Update circles
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].display();
  }
}

class Circle {
  constructor(x, y, size, color) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-4, 4), random(-4, 4));
    this.acc = createVector();
    this.size = size;
    this.color = color;
    this.trails = [];
  }

  update() {
    // Apply random movement
    this.acc = createVector(random(-0.2, 0.2), random(-0.2, 0.2));

    // Apply repulsion from other circles
    for (let i = 0; i < circles.length; i++) {
      if (circles[i] !== this) {
        let d = dist(this.pos.x, this.pos.y, circles[i].pos.x, circles[i].pos.y);
        if (d < (this.size/2 + circles[i].size/2)) {
          let repulsion = p5.Vector.sub(this.pos, circles[i].pos);
          repulsion.setMag(1/d);
          this.acc.add(repulsion);
        }
      }
    }

    // Update position and velocity
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.pos.add(this.vel);

    // Change color
    let speed = this.vel.mag();
    let colorChange = map(speed, 0, 10, 0, 5);
    this.color = [this.color[0] + colorChange, this.color[1] - colorChange, this.color[2]];

    // Check canvas boundaries
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }

    // Add trail
    let trail = {
      pos: this.pos.copy(),
      size: this.size,
      lifespan: 30,
      angle: this.vel.heading() + PI/2
    };
    this.trails.push(trail);
    for (let i = this.trails.length - 1; i >= 0; i--) {
      let t = this.trails[i];
      fill(this.color[0], this.color[1], this.color[2], map(t.lifespan, 0, 30, 0, 255));
      push();
      translate(t.pos.x, t.pos.y);
      rotate(t.angle);
      ellipse(0, 0, t.size, t.size);
      pop();
      t.lifespan--;
      if (t.lifespan <= 0) {
        this.trails.splice(i, 1);
      }
    }
  }

  display() {
    // Draw circle
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
