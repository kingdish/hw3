var n = 68;
var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

while (n > 34) {
  line(startX, startY, endX, endY);
  startX += 5;
  endX += 5;
  endY += 10;
	n--;
}

while (n > 0) {
  line(startX, startY, endX, endY);
  startX += 5;
  endX += 5;
	n--;
}
