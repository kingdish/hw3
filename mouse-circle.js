function draw() {
  clear();
  var numOfLines = 34;
  var i = 0;
  var radius = 170;  
  var startX = mouseX;
  var startY = mouseY;
  
  while (i < numOfLines) {
    endX = radius + radius * Math.sin(360 / numOfLines * i * Math.PI / 180);
    endY = radius + radius * Math.cos(360 / numOfLines * i * Math.PI / 180);
    line(startX, startY, endX, endY);
    i++;
  }
}
