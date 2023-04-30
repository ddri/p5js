let circles = [];

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(3); // increase stroke weight

  // Create three circles with random positions and velocities
  for (let i = 0; i < 3; i++) {
    circles.push({
      position: createVector(random(width), random(height)),
      velocity: createVector(random(-3, 3), random(-3, 3)),
      radius: random(50, 100),
    });
  }
}

function draw() {
  background(255);

  // Update the positions of the circles
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    // Apply repulsion from other circles
    for (let j = 0; j < circles.length; j++) {
      if (i !== j) {
        let other = circles[j];
        let distance = p5.Vector.dist(circle.position, other.position);
        let repulsion = p5.Vector.sub(circle.position, other.position).div(distance * distance);
        circle.velocity.add(repulsion);
      }
    }

    // Apply bouncing off the edges of the canvas
    if (circle.position.x < circle.radius || circle.position.x > width - circle.radius) {
      circle.velocity.x *= -1;
    }
    if (circle.position.y < circle.radius || circle.position.y > height - circle.radius) {
      circle.velocity.y *= -1;
    }

    // Update the position of the circle based on its velocity
    circle.position.add(circle.velocity);

    // Draw the circle and its concentric circles
    stroke(0); // set stroke color to black
    ellipse(circle.position.x, circle.position.y, circle.radius);
    for (let j = 0; j < 4; j++) {
      stroke(0);
      ellipse(circle.position.x, circle.position.y, circle.radius - (j + 1) * 20);
    }
  }
}
