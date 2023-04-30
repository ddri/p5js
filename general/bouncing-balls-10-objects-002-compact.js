let circles = [];

function setup() {
  createCanvas(800, 800);
  noStroke();
  ellipseMode(CENTER);

  for (let i = 0; i < 20; i++) {
    let circleSize = random(10, 30);
    let color = [random(255), random(255), random(255)];
    circles.push({
      pos: createVector(random(width), random(height)),
      vel: createVector(random(-10, 10), random(-10, 10)),
      size: circleSize,
      color: color,
      trails: []
    });
  }
}

function draw() {
  background(255);

  circles.forEach(c1 => {
    c1.acc = createVector(random(-0.2, 0.2), random(-0.2, 0.2));
    circles.forEach(c2 => {
      if (c1 !== c2 && dist(c1.pos.x, c1.pos.y, c2.pos.x, c2.pos.y) < (c1.size / 2 + c2.size / 2)) {
        let repulsion = p5.Vector.sub(c1.pos, c2.pos);
        repulsion.setMag(1 / dist(c1.pos.x, c1.pos.y, c2.pos.x, c2.pos.y));
        c1.acc.add(repulsion);
        c2.acc.sub(repulsion);
      }
    });

    c1.vel.add(c1.acc).limit(25);
    c1.pos.add(c1.vel);

    c1.trails.push({
      pos: c1.pos.copy(),
      size: c1.size,
      lifespan: 60,
      angle: c1.vel.heading() + PI / 2
    });

    c1.trails.forEach(t => {
      fill(c1.color[0], c1.color[1], c1.color[2], map(t.lifespan, 0, 60, 0, 255));
      push();
      translate(t.pos.x, t.pos.y);
      rotate(t.angle);
      ellipse(0, 0, t.size, t.size);
      pop();
      t.lifespan <= 0 ? c1.trails.splice(c1.trails.indexOf(t), 1) : t.lifespan--;
    });

    if (c1.pos.x < 0 || c1.pos.x > width) {
      c1.vel.x *= -1;
    }
    if (c1.pos.y < 0 || c1.pos.y > height) {
      c1.vel.y *= -1;
    }

    let r = c1.color[0];
    let g = c1.color[1];
    let b = c1.color[2];

    if (r === 255 && g < 255 && b === 0) {
      g += 5;
    } else if (r > 0 && g === 255 && b === 0) {
      r -= 5;
    } else if (r === 0 && g === 255 && b < 255) {
      b += 5;
    } else if (r === 0 && g > 0 && b === 255) {
      g -= 5;
    } else {
      b -= 5;
    }

    c1.color = [r, g, b];
    fill(r, g, b);
    ellipse(c1.pos.x, c1.pos.y, c1.size);
  });
}
