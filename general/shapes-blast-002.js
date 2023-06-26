let t = 0; // time variable for Perlin noise

// Setup function for p5.js
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);   // White stroke color for shapes
  noFill();      // No fill color for shapes
  frameRate(30); // Slower frame rate
}

// Draw function for p5.js
function draw() {
  // Overlay a semi-transparent black rectangle for trail effect
  fill(0, 50);
  rect(0, 0, width, height);
  noFill();

  let numShapes = 10; // Fewer shapes for slower pace

  // Draw numShapes shapes
  for (let i = 0; i < numShapes; i++) {
    let x = noise(t + i*0.1) * width; // x position based on Perlin noise
    let y = noise(t + i*0.1 + 100) * height; // y position based on Perlin noise
    let size = noise(t + i*0.1 + 200) * 100 + 20; // size based on Perlin noise
    let shapeType = random(['circle', 'triangle']); // Random shape type

    // Draw the shape
    switch (shapeType) {
      case 'circle':
        circle(x, y, size);
        break;
      case 'triangle':
        triangle(x, y, x + size / 2, y + size, x + size, y);
        break;
    }
  }

  t += 0.01; // increment time
}
