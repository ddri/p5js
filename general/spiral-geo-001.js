let angle = 0;
let radius = 50;

function setup() {
  createCanvas(400, 400);
  strokeWeight(1);
  stroke(0);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  for (let i = 0; i < 20; i++) {
    rotate(angle);
    line(0, 0, radius, 0);
    radius += 5;
  }

  angle += 0.05;
}
