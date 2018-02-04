function setup() {
  var lewittYellow = color(240, 206, 51);
  var lewittBlue = color(40, 152, 204);
  var lewittRed = color(202, 67, 108);
	noStroke();
  
	createCanvas(700, 700);
  background(255,255,255);
  fill(lewittBlue);
  rect(150, 200, 400, 500);
  ellipse(350, 200, 400);
  fill(lewittRed);
  rect(225, 200, 250, 500);
  ellipse(350, 200, 250);
  fill(lewittYellow);
  rect(300, 200, 100, 500);
  ellipse(350, 200, 100);
}
