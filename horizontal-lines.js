var n = 34;
var startX = 0;
var startY = 0;
var endX = 340;
var endY = 0;

while (n > 0) {
  line(startX, startY, endX, endY);
  startY += 10;
  endY += 10;
	n--;
}
