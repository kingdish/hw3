function setup() {
	createCanvas(700, 700);
  background(255,255,255);
  upperRectangleGroup(0, 0, width, 40, 'black');
  fill('black');
  rect(0, 320, width, 40);
  lowerRectangleGroup(0, 360, width / 16, 340, 'black');
}

function upperRectangleGroup(x, y, w, h, startColor) {
  var i = 0;
  var n = 8;
  noStroke();
	while (i < n) {
    fill(startColor);
    rect(x, y, w, h);
    y = y + h;
  	if (startColor == 'black') {
    	startColor = 'white';
    } else {
    	startColor = 'black';
    }
  	i += 1;
  }
}

function lowerRectangleGroup(x, y, w, h, startColor) {
  var i = 0;
  var n = 16;
  noStroke();
	while (i < n) {
    fill(startColor);
    rect(x, y, w, h);
    x = x + w;
  	if (startColor == 'black') {
    	startColor = 'white';
    } else {
    	startColor = 'black';
    }
  	i += 1;
  }
}
