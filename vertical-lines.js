var n = 34;
var startX = 0;
var startY = 0;
var endX = 0;
var endY = 340;

while (n > 0) {
  line(startX, startY, endX, endY);
  startX += 10;
  endX += 10;
	n--;
}
