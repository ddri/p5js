let angles = [];
let trails = [];

function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
  noFill();
  for (let i = 0; i < 10; i++) {
    angles.push(i * TWO_PI / 40);
    trails.push([]);
  }
}

function draw() {
  background(0);
  angles.forEach((angle, i) => {
    let y = map(sin(angle), -1, 1, 0, height);
    ellipse(i * (width/10 - 10) + 40, y, 50, 50);

    // Add ellipse to trail
    trails[i].push({ pos: createVector(i * (width/10 - 10) + 40, y), size: 50, color: [255, 255, 255, 255], lifespan: 40 });
    trails[i].forEach((t, j) => {
      fill(t.color[0], t.color[1], t.color[2], t.color[3]);
      ellipse(t.pos.x, t.pos.y, t.size, t.size);
      t.color[3] = map(t.lifespan, 10, 40, 0, 255);
      t.lifespan--;
      if (t.lifespan < 0) trails[i].splice(j, 1);
    });

    angles[i] += 0.05;
  });
}
