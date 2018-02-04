var n = 34;
var startX = 170;
var startY = 0;
var endX = 170;
var endY = 0;

while (n > 17) {
  line(startX, startY, endX, endY);
  startX -= 10;
  endX += 10;
  startY += 10;
  endY += 10;
	n--;
}

while (n > 0) {
  line(startX, startY, endX, endY);
  startX += 10;
  endX -= 10;
  startY += 10;
  endY += 10;
	n--;
}
