let angles = [];
let trails = [];
let squareColors = [];
let xOffsets = [];

function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();
  for (let i = 0; i < 30; i++) {
    angles.push(i * TWO_PI / 30);
    trails.push([]);
    squareColors.push(color(255));
    xOffsets.push(0);
  }
}

function draw() {
  background(0);
  angles.forEach((angle, i) => {
    let y = map(sin(angle), -1, 1, 100, height - 100);
    let squareSize = 10;

    let x = i * (width/30 + 10) + xOffsets[i];
    x = constrain(x, 0 + squareSize/2, width - squareSize/2);

    noStroke();
    fill(squareColors[i]);
    rectMode(CENTER);
    rect(x, y, squareSize, squareSize);

    // Add square to trail
    trails[i].push({ pos: createVector(x, y), size: squareSize, color: squareColors[i], lifespan: 60 });
    trails[i].forEach((t, j) => {
      noStroke();
      fill(t.color);
      rectMode(CENTER);
      rect(t.pos.x, t.pos.y, t.size, t.size);
      t.lifespan--;
      t.size -= 0.3; // Decrease trail size as it fades
      if (t.lifespan < 0) trails[i].splice(j, 1);
    });

    angles[i] += 0.05;

    // Oscillate square horizontally
    xOffsets[i] = sin(frameCount/10 + i) * 50;
  });
}
