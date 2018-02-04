function drawPixel(x, y, n) {
  rect(x, y, n, n);
}

function yourPatch(x, y) {
  noStroke();
  fill(0, 50, 98);
  rect(x, y, x + 300, y + 300);
  x = 0;
  y = 0;
  var n = 15;
  while (x <= 150) {
    fill(0 + (59 - 0) / n * x / 10, 50 + (126 - 50) / n * x / 10, 98 + (161 - 98) / 5 * x / 10, 100);
    drawPixel(x, y, 300 - 2 * x);
    y += 10;
    x += 10;
  }
  fill(59, 126, 161);
}

yourPatch(0, 0);
