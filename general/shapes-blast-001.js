// Setup function for p5.js
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); // Black background
  stroke(255);   // White stroke color for shapes
  noFill();      // No fill color for shapes
}

// Draw function for p5.js
function draw() {
  background(0); // Continuously clear the canvas each frame

  let numShapes = 50; // Number of shapes to draw

  // Draw numShapes shapes
  for (let i = 0; i < numShapes; i++) {
    let x = random(width); // Random x position
    let y = random(height); // Random y position
    let size = random(20, 100); // Random size
    let shapeType = random(['circle', 'square', 'triangle']); // Random shape type

    // Draw the shape
    switch (shapeType) {
      case 'circle':
        circle(x, y, size);
        break;
      case 'square':
        rect(x, y, size, size);
        break;
      case 'triangle':
        triangle(x, y, x + size / 2, y + size, x + size, y);
        break;
    }
  }
}
