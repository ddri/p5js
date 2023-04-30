let angle = 0;
let radius = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  stroke(1);
  translate(width / 2 + sin(frameCount * 0.01) * 150, height / 2);

  for (let i = 0; i < 10; i++) {
    // Generate a new stroke weight for each line using random() function
    let strokeWeightRandom = random(1, 8);
    strokeWeight(strokeWeightRandom);
    rotate(angle);
    line(0, 0, radius, 0);
    radius += 5;
  }

  angle += 0.05;
}
