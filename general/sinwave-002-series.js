let angles = [];

function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
  noFill();
  for (let i = 0; i < 10; i++) {
    angles.push(i * TWO_PI / 10);
  }
}

function draw() {
  background(0);
  angles.forEach((angle, i) => {
    let y = map(sin(angle), -1, 1, 0, height);
    ellipse(i * (width/10 - 10) + 40, y, 50, 50);
    angles[i] += 0.05;
  });
}
