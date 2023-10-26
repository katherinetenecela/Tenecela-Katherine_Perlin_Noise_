let noiseTime = 0;
let noiseTam = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(160, 220, 9);
}

function draw() {
  // background(0, 10);
  let posX1 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY1 = map(noise(noiseTime + 8), 0, 1, 0, windowHeight);
  let posX2 = map(noise(noiseTime + 10), 0, 1, 0, windowWidth);
  let posY2 = map(noise(noiseTime + 52), 0, 1, 0, windowHeight);

  let tam1 = map(noise(noiseTam + 50), 0, 1, 120, 1);
  let tam2 = map(noise(noiseTam + 240), 0, 1, 90, 1);

  noiseTime += 0.001;
  noiseTam += 0.05;

  stroke(20, 80, 60, 10);
  strokeWeight(4);

  fill(255);
  //noStroke();
  circle(posX1, posY1, tam1);
  fill(10, 205, 50);
  circle(posX2, posY2, tam2);
}
