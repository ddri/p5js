let angles = [];
let trails = [];

function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    angles.push(i * TWO_PI / 10);
    trails.push([]);
  }
}

function draw() {
  background(0);
  angles.forEach((angle, i) => {
    let y = map(sin(angle), -1, 1, 0, height);
    let ellipseSize = 50;

    // Calculate color gradient
    let color1 = color(255, 0, 0);
    let color2 = color(0, 255, 0);
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color1, color2, inter);

    fill(c);
    ellipse(i * (width/10 - 10) + 40, y, ellipseSize, ellipseSize);

    // Add ellipse to trail
    trails[i].push({ pos: createVector(i * (width/10 - 10) + 40, y), size: ellipseSize, color: c, lifespan: 60 });
    trails[i].forEach((t, j) => {
      let trailColor = lerpColor(t.color, color(0, 0, 0, 0), 1 - t.lifespan / 60);
      fill(trailColor);
      ellipse(t.pos.x, t.pos.y, t.size, t.size);
      t.lifespan--;
      if (t.lifespan < 0) trails[i].splice(j, 1);
    });

    angles[i] += 0.05;
  });
}
