let angle = 0;
let radius = 50;
let centerX = 0;

function setup() {
  createCanvas(400, 400);
  strokeWeight(5);
  stroke(1);
}

function draw() {
  background(255);

  // Calculate the X-coordinate of the center using the sin() function
  centerX = width / 2 + sin(frameCount * 0.1) * 150;

  // Check whether the center is within the canvas boundaries
  if (centerX > 0 && centerX < width) {
    translate(centerX, height / 2);
  }
  else {
    // If the center is beyond the canvas boundaries, keep it at the edge
    if (centerX <= 0) {
      translate(0, height / 2);
    }
    else {
      translate(width, height / 2);
    }
  }

  for (let i = 0; i < 10; i++) {
    rotate(angle);
    line(0, 0, radius, 0);
    radius += 5;
  }

  angle += 0.05;
}
