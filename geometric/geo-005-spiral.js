let angle = 0;
let angleIncrement = 0.1;
let radius = 0;
let centerX, centerY;
let spiralSpeed = 0.01;
let growing = true;
let minRadius = 10;
let maxRadius = 150;
let canvasRotation = 0.001;

function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
  noFill();
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  translate(width / 2, height / 2); // Center the canvas
  rotate(canvasRotation); // Rotate the entire canvas

  let x = cos(angle) * radius;
  let y = sin(angle) * radius;

  ellipse(x, y, radius * 2);

  angle += angleIncrement;

  if (growing) {
    radius += 0.2;
    if (radius >= maxRadius) {
      growing = false;
    }
  } else {
    radius -= 0.2;
    if (radius <= minRadius) {
      growing = true;
    }
  }

  // Move the entire spiral
  centerX += cos(spiralSpeed);
  centerY += sin(spiralSpeed);

  // Bounce if hitting the canvas edge
  if (centerX <= minRadius || centerX >= width - minRadius) {
    spiralSpeed *= -1;
  }

  if (centerY <= minRadius || centerY >= height - minRadius) {
    spiralSpeed *= -1;
  }
}
