var rate = 0.1;
var x = 0;
var y = 0;

fill('red');
noStroke();

function draw() {
  clear();
  x = mouseX*rate + x * (1-rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
  y = mouseY*rate + y * (1-rate);
  ellipse(x, y, 15, 15);
}
