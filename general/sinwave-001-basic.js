let angle = 0;

function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
  noFill();
}

function draw() {
  let y = map(sin(angle), -1, 1, 0, height);
  ellipse(width/2, y, 50, 50);
  angle += 0.05;
}
