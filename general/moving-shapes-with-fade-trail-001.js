let angle = 0;
let trails = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(255, 20);

  // Update angle for waveforms
  angle += 0.05;

  // Calculate waveform values
  let waveform1 = sin(angle) * 50;
  let waveform2 = cos(angle) * 50;

  // Draw first circle with waveform and trail
  let x1 = width/2 + waveform1;
  let y1 = height/2 + waveform1;
  trails.push({x: x1, y: y1, lifespan: 60});
  for (let i = trails.length - 1; i >= 0; i--) {
    let trail = trails[i];
    fill(255, 127, 80, map(trail.lifespan, 0, 60, 0, 255));
    ellipse(trail.x, trail.y, 200, 200);
    trail.lifespan--;
    if (trail.lifespan <= 0) {
      trails.splice(i, 1);
    }
  }

  // Draw second circle with waveform and trail
  let x2 = width/2 + waveform2;
  let y2 = height/2 + waveform2;
  trails.push({x: x2 + 50, y: y2 + 50, lifespan: 60});
  for (let i = trails.length - 1; i >= 0; i--) {
    let trail = trails[i];
    fill(30, 144, 255, map(trail.lifespan, 0, 60, 0, 255));
    ellipse(trail.x, trail.y, 200, 200);
    trail.lifespan--;
    if (trail.lifespan <= 0) {
      trails.splice(i, 1);
    }
  }
}
