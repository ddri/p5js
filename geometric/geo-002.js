let r = 0;

function setup() {
  createCanvas(458, 458);
  background(255);
}

function draw() {
  clear();
  background(255);
  noFill();
  strokeWeight(2);
  
  let centerX = width / 2;
  let centerY = height / 2;

  for (let i = 0; i < 360; i += 15) {
    let rad = radians(i + r);
    let x = centerX + cos(rad) * 150;
    let y = centerY + sin(rad) * 150;
    ellipse(centerX, centerY, x, y);
    line(centerX, centerY, x, y);
  }
   
  r++;
}