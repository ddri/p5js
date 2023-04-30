function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(2);
  noFill();
}

function draw() {
  // Generate random coordinates for shapes
  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);
  let r = random(50, 100);
  let w = random(50, 100);
  let h = random(50, 100);

  // Generate random colors for shapes
  let c1 = color(random(255), random(255), random(255));
  let c2 = color(random(255), random(255), random(255));

  // Draw lines
  stroke(c1);
  line(x1, y1, x2, y2);

  // Draw circles
  stroke(c2);
  ellipse(x1, y1, r, r);

  // Draw squares
  stroke(c1);
  rect(x2, y2, w, h);
}
