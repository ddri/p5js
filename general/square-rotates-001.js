let circles = [];

function setup() {
  createCanvas(600, 600);
  noFill();
  strokeWeight(1);

  // Create 10 circles at different positions with random velocity
  for (let i = 0; i < 100; i++) {
    circles.push({
      position: createVector(random(width), random(height)),
      velocity: createVector(random(-1, 1), random(-5, 4)),
      radius: random(50, 100) * 1,
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

    // Draw the square and its concentric squares
    stroke(0);
    rectMode(CENTER);
    rect(circle.position.x, circle.position.y, circle.radius, circle.radius);

    // Draw 20 smaller concentric squares inside the largest one
    for (let j = 0; j < 1; j++) {
      stroke(0);
      let radius = circle.radius - (j + 1) * 6; // smaller radius for inner squares
      push();
      translate(circle.position.x, circle.position.y);
      rotate(-frameCount * 0.02); // rotate the concentric squares counterclockwise
      rect(0, 0, radius, radius);
      pop();
    }
  }
}
