function singleImage(x, y, sideLength) {
  var n = 4;
	while (n > 0) {
  	rect(x, y, sideLength, sideLength);
    x += sideLength / n / 2;
    y += sideLength / n / 2;
    sideLength -= sideLength / n;
    n--;
  }
}

var n = 5;
var startX = 0;
var startY = 140;

while (n > 0) {
  singleImage(startX, startY, 60);
  startX += 70;
	n--;
}
