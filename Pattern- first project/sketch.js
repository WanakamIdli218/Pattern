function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(250, 240, 230);
  strokeWeight(5);

  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
      if ((x + y) % 40 == 0) {
        stroke(200, 120, 150);
        line(x, y, x + 20, y + 20);
      } else {
        stroke(100, 150, 200);
        line(x, y + 20, x + 20, y);
      }
    }
  }
}
