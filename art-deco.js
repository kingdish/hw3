function singleImage(x, y, sideLength) {
  var n = 4;
	while (n > 0) {
  	rect(x, y, sideLength, sideLength);
    x += 7.5;
    y += 7.5;
    sideLength -= 15;
    n--;
  }
}
