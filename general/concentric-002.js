let circles = [];

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(3);

  // Create one circle at the center of the canvas with zero velocity
  circles.push({
    position: createVector(width/2, height/2),
    velocity: createVector(0, 0), // set velocity to zero
    radius: random(50, 100),
  });
}

function draw() {
  background(255);

  // Update the positions of the circles
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    // Apply repulsion from other circles (there are no other circles, so skip this step)

    // Update the position of the circle based on its velocity (which is zero)
    circle.position.add(circle.velocity);

    // Draw the circle and its concentric circles
    stroke(0);
    ellipse(circle.position.x, circle.position.y, circle.radius);
    for (let j = 0; j < 4; j++) {
      stroke(0);
      let angle = frameCount * 0.01 + j * 0.5;
      let offset = createVector(cos(angle), sin(angle)).mult(10);
      ellipse(circle.position.x + offset.x, circle.position.y + offset.y, circle.radius - (j + 1) * 20);
    }
  }
}
