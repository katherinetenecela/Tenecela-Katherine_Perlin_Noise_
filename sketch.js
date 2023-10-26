let noiseTime = 0;
let noiseTam = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // background(0, 10);
  let posX1 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY1 = map(noise(noiseTime + 5), 0, 1, 0, windowHeight);
  let posX2 = map(noise(noiseTime + 0.1), 0, 1, 0, windowWidth);
  let posY2 = map(noise(noiseTime + 5.2), 0, 1, 0, windowHeight);
  let posX3 = map(noise(noiseTime + 0.2), 0, 1, 0, windowWidth);
  let posY3 = map(noise(noiseTime + 5.4), 0, 1, 0, windowHeight);
  let posX4 = map(noise(noiseTime + 0.4), 0, 1, 0, windowWidth);
  let posY4 = map(noise(noiseTime + 5.7), 0, 1, 0, windowHeight);

  let tam1 = map(noise(noiseTam), 0, 1, 20, 1);
  let tam2 = map(noise(noiseTam + 1), 0, 1, 30, 1);
  let tam3 = map(noise(noiseTam + 2), 0, 1, 40, 1);
  let tam4 = map(noise(noiseTam + 3), 0, 1, 10, 1);

  noiseTime += 0.001;
  noiseTam += 0.005;

  stroke(20, 80, 60, 10);
  strokeWeight(4);

  fill(200, 200, 50);
  circle(posX1, posY1, tam1);
  fill(100, 255, 50);
  circle(posX2, posY2, tam2);
  fill(200, 255, 50);
  circle(posX3, posY3, tam3);
  fill(255, 100);
  fill(255, 0, 255);
  stroke(150, 100, 255);
  strokeWeight(1);
  circle(posX4, posY4, tam4);
  noFill();
  stroke(255, 50);
  circle(posX4, posY4, tam4 + 10);
}
