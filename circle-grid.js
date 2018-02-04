var row = 20;
var column = 20;
var startX = 13;
var startY = 13;
var radius = 13;

background(0, 0, 0);
while (row > 0) {
	while (column > 0) {
    ellipse(startX, startY, radius);
    startX += 16.5;
	  column--;
  }
  startY += 16.5;
  row--;
  column = 20;
  startX = 13;
}

