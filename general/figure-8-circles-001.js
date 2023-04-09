let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noFill();
  stroke(0, 128, 255);
}

function draw() {
  background(255);

  translate(width / 2, height / 2);
  rotate(angle);

  for (let i = 0; i < 360; i += 15) {
    let radius = map(sin(angle + i * 2), -1, 1, 50, 200);
    let x = radius * cos(i);
    let y = radius * sin(i);
    ellipse(x, y, 30);
  }

  angle += 0.5;
}
