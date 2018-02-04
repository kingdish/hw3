function setup() { 
  createCanvas(400, 400);
	noStroke();
  currColor = color(255, 255, 255);
} 

var diameter = 10;
var currColor;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

//Color palette from http://www.color-hex.com/color-palette/54431
function keyPressed() {
	var tempR = red(currColor);
	var tempG = green(currColor);
	var tempB = blue(currColor);
  print(key);
	fill('white');
	ellipse(width - 30, height - 30, 20);
  if (key == 'R') {
		currColor = color(242,169,137);
    fill(currColor);
  } else if (key == 'B') {
		currColor = color(165,195,246);
    fill(currColor);
  } else if (key == 'G') {
		currColor = color(151,219,98);
    fill(currColor);
  } else if (key == 'Y') {
		currColor = color(251,211,88);
    fill(currColor);
  } else if (key == 'O') {
		currColor = color(255,175,54);
    fill(currColor);
  } else if (key == 'P') {
		currColor = color(201,159,255);
    fill(currColor); 
  } else if (key == '1') {
    diameter = 10; 
  } else if (key == '2') {
    diameter = 15; 
  } else if (key == '3') {
    diameter = 20; 
  } else if (key == 'E') {
    currColor = color(255,255,255);
    fill(currColor); 
  }
	fill(currColor);
	ellipse(width - 30, height - 30, diameter);
}
