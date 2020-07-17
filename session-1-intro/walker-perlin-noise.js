
// Create the xoff variable as a time series 
// interval for Perlin noise.

var xoff = 0;

// Create the canvas

function setup() {
  createCanvas(640, 360);
}

// Create the object  

function draw() {
  background(51);

// Setting the draw position randomly would look like
//  var x = 320;

// Using Perlin noise instead. This picks a value for 
// the xoff object in the width of the screen. The 
// object is then continually updated by a new instance
// of the Perlin value.

  var x = noise(xoff) * width
  xoff += 0.01;
  
  // Draw the walker

    fill(255);
    ellipse(x, 180, 48, 48);
  }
