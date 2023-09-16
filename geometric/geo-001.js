function setup() {
  createCanvas(458, 458);
  background(255);
  noLoop();
}

function draw() {
  noFill();
  strokeWeight(2);
  
  let centerX = width / 2;
  let centerY = height / 2;

  for (let r = 0; r < 360; r += 15) {
    let rad = radians(r);
    let x = centerX + cos(rad) * 150;
    let y = centerY + sin(rad) * 150;
    ellipse(centerX, centerY, x, y);
    line(centerX, centerY, x, y);
  }
}