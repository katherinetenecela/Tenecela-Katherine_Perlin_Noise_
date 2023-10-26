let noiseTime = 0;
let noiseTam = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 10), 0, 1, 0, windowHeight);
  let posXRight = windowWidth - posX;
  noiseTime += 0.009;
  noiseTam += 0.01;

  let tam = map(noise(noiseTam), 0, 1, 50, 5);

  circle(posX, posY, tam);
  fill(0, random(10, 100), 10, random(100, 200), 20);
  noStroke(0);
  // strokeWeight(1);

  circle(posX, posY, tam);
  circle(posXRight, posY, tam + 20);
  fill(100, random(0, 250, 200), 250);
}
