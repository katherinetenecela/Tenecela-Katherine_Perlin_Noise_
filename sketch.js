let t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  stroke(0, 50);
  noFill();
  t = 0;
}

function draw() {
  translate(width / 3, height / 2);
  beginShape();
  for (let i = 0; i < 130; i++) {
    let ang = map(i, 0, 100, 0, 10);
    let rad = 500 * noise(i * 0.1, t * 0.005);
    let x = rad * cos(ang);
    let y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 1;

  if (frameCount % 1000 == 0) {
    background(255);
  }
}
