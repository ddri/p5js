let angles = [];
let trails = [];

function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
  for (let i = 0; i < 40; i++) {
    angles.push(i * TWO_PI / 40);
    trails.push([]);
  }
}

function draw() {
  background(0);
  angles.forEach((angle, i) => {
    let y = map(sin(angle), -1, 1, 0, height);
    let ellipseSize = 20;

    // Limit movement to 50 pixels from top and bottom
    y = constrain(y, 100, height - 100);

    noFill();
    stroke(255);
    ellipse(i * (width/10 - 20) + 10, y, ellipseSize, ellipseSize);

    // Add ellipse to trail
    trails[i].push({ pos: createVector(i * (width/10 - 20) + 10, y), size: ellipseSize, color: color(255), lifespan: 60 });
    trails[i].forEach((t, j) => {
      let trailColor = color(red(t.color), green(t.color), blue(t.color), map(t.lifespan, 0, 60, 0, 255));
      noStroke();
      fill(trailColor);
      ellipse(t.pos.x, t.pos.y, t.size, t.size);
      t.lifespan--;
      if (t.lifespan < 0) trails[i].splice(j, 1);
    });

    angles[i] += 0.05;
  });
}
