function draw() {
  clear();
  var n = 34;
  var startX = mouseX;
  var startY = mouseY;
  var endX = 0;
  var endY = 340;
  
  while (n > 0) {
    line(startX, startY, endX, endY)
    endX += 10;
    n--;
  }
}
