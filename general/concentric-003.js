let circles = [];

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(1);

  // Create five circles at different positions with random velocity
  for (let i = 0; i < 5; i++) {
    circles.push({
      position: createVector(random(width), random(height)),
      velocity: createVector(random(-1, 1), random(-1, 1)), // random velocity
      radius: random(50, 100),
    });
  }
}

function draw() {
  background(255);

  // Update the positions of the circles
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    // Apply repulsion from other circles (there are no other circles, so skip this step)

    // Update the position of the circle based on its velocity
    circle.position.add(circle.velocity);

    // Apply bouncing behavior to the edges of the canvas
    if (circle.position.x < circle.radius/2 || circle.position.x > width - circle.radius/2) {
      circle.velocity.x *= -1;
    }
    if (circle.position.y < circle.radius/2 || circle.position.y > height - circle.radius/2) {
      circle.velocity.y *= -1;
    }

    // Draw the circle and its concentric circles
    stroke(0);
    ellipse(circle.position.x, circle.position.y, circle.radius);

    // Draw 20 smaller concentric circles inside the largest one
    for (let j = 0; j < 20; j++) {
      stroke(0);
      let radius = circle.radius - (j + 1) * 5; // smaller radius for inner circles
      ellipse(circle.position.x, circle.position.y, radius);
    }

    // Draw the wobbling effect on the concentric circles
    for (let j = 0; j < 4; j++) {
      stroke(0);
      let angle = frameCount * 0.01 + j * 0.5;
      let offset = createVector(cos(angle), sin(angle)).mult(10);
      ellipse(circle.position.x + offset.x, circle.position.y + offset.y, circle.radius - (j + 1) * 20);
    }
  }
}
