let angle = 0;
let angleIncrement = 0.1;
let radius = 10;
let centerX, centerY;

function setup() {
  createCanvas(800, 800);
  background(0); // Set the background to black
  stroke(255); // Set the stroke (lines) to white
  noFill();
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  let x = centerX + cos(angle) * radius;
  let y = centerY + sin(angle) * radius;

  ellipse(x, y, 5, 5); // Draw a point at the current position

  angle += angleIncrement;
  radius += 0.1; // Increase the radius for animation
}
