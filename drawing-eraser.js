function setup() { 
  createCanvas(400, 400);
	noStroke();
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

//Color palette from http://www.color-hex.com/color-palette/54431
function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(242,169,137);
  } else if (key == 'B') {
    fill(165,195,246);
  } else if (key == 'G') {
    fill(151,219,98); 
  } else if (key == 'Y') {
    fill(251,211,88); 
  } else if (key == 'O') {
    fill(255,175,54); 
  } else if (key == 'P') {
    fill(201,159,255); 
  } else if (key == '1') {
    diameter = 10; 
  } else if (key == '2') {
    diameter = 15; 
  } else if (key == '3') {
    diameter = 20; 
  } else if (key == 'E') {
		fill(255,255,255);
	}
}
