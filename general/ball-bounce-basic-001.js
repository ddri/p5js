// Initialize variables
let x = 40; // x position of the ball
let y = 50; // y position of the ball
let xspeed = 4; // speed of the ball in x direction
let yspeed = 5; // speed of the ball in y direction

function setup() {
  // Create a canvas
  createCanvas(400, 400);
}

function draw() {
  // Set the background color
  background(220);

  // Draw the ball
  fill(255, 0, 0); // Set the fill color to red
  ellipse(x, y, 50, 50); // Draw the ball

  // Update the position of the ball
  x = x + xspeed;
  y = y + yspeed;

  // Check if the ball hits the canvas edges and change direction if needed
  if (x > width - 25 || x < 25) {
    xspeed = -xspeed;
  }
  if (y > height - 25 || y < 25) {
    yspeed = -yspeed;
  }
}
