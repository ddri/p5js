// Initialize variables
let angle = 0; // starting angle of the spinning shape
let radius = 0; // starting radius of the spinning shape
let trail = []; // array to store the trail

function setup() {
  // Create a canvas
  createCanvas(400, 400);
  // Set the frame rate to 60fps
  frameRate(60);
}

function draw() {
  // Set the background color with low opacity to create a fading effect
  background(220, 20);

  // Calculate the position of the center of the canvas
  let centerX = width / 2;
  let centerY = height / 2;

  // Calculate the position of the spinning shape based on the current angle and radius
  let x = centerX + cos(angle) * radius;
  let y = centerY + sin(angle) * radius;

  // Add the current position to the trail array
  trail.push({ x, y, time: millis() });

  // Draw the trail
  noFill();
  stroke(255, 0, 0); // Set the stroke color to red
  strokeWeight(2); // Set the stroke weight to 2 pixels
  beginShape();
  for (let i = 0; i < trail.length; i++) {
    // Calculate the alpha value of the trail based on its age
    let alpha = map(i, 0, trail.length - 1, 255, 0);
    stroke(255, 0, 0, alpha); // Set the stroke color with fading alpha value
    // Draw a vertex at the current trail position
    vertex(trail[i].x, trail[i].y);
  }
  endShape();

  // Draw the spinning shape
  fill(0, 0, 255); // Set the fill color to blue
  noStroke();
  ellipse(x, y, 50, 50);

  // Update the angle and radius of the spinning shape
  angle += 0.05;
  radius += 0.5;

  // Remove the oldest point from the trail array if it has been more than 5 seconds
  if (trail.length > 0 && millis() - trail[0].time > 5000) {
    trail.shift();
  }
}

function mousePressed() {
  // Clear the trail when the mouse is clicked
  trail = [];
  radius = 0;
}
