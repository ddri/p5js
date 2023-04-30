let circles = [];

function setup() {
  createCanvas(600, 600);
  noFill();
  strokeWeight(1);

  // Create three circles at different positions with random velocity
  circles.push({
    position: createVector(random(width), random(height)),
    velocity: createVector(random(-1, 1), random(-1, 1)),
    radius: random(50, 100) * 4, // double the radius
  });
  circles.push({
    position: createVector(random(width), random(height)),
    velocity: createVector(random(-1, 1), random(-1, 1)),
    radius: random(50, 100) * 3, // double the radius
  });
  circles.push({
    position: createVector(random(width), random(height)),
    velocity: createVector(random(-1, 1), random(-1, 1)),
    radius: random(50, 100) * 2, // double the radius
  });
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
    for (let j = 0; j < 20; j++) {
      stroke(0);
      let radius = circle.radius - (j + 1) * 5; // smaller radius for inner squares
      rect(circle.position.x, circle.position.y, radius, radius);
    }
  }
}
