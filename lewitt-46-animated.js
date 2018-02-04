function setup() { 
  createCanvas(1600, 400);
}

function draw() { 
  clear();
  c = randomGreyScale();
  
  var n = 80;
  var startX = 0;
  var startY = 0;
  var endX = 0;
  var endY = Math.min((height - startY), random(100, height - startY));
  var step = width / n;
  var minYGap = 30;
  var maxYGap = 60;
  var minLength = 150;
  while (n > 0) {
    while (startY <= height - minYGap) {
      sketchyLine(startX, startY, endX, endY, -15, 15);
      startY = endY + random(minYGap, maxYGap);
      endY = startY + Math.min((height - startY), random(minLength, height - startY));
    }
    var actualStep = random(step - 5, step + 5)
    startX += actualStep;
    endX += actualStep;
    startY = 0;
    endY = Math.min((height - startY), random(minLength, height - startY));
    n--;
  }
} 

var c;

function randomGreyScale() {
  var temp = random(150, 255);
  return color(temp, temp, temp);
}

function sketchyLine(x1, y1, x2, y2, lowerBound, upperBound) {
  while (y1 < y2) {
    c = randomGreyScale()
    strokeWeight(random(1,4));
    stroke(c);
    point(x1, y1);
    x1 += random(-1, 1);
    if (x1 < x2 + lowerBound) {
      x1 += random(0, 1);
    } else if (x1 > x2 + upperBound) {
      x1 -= random(0, 1);
    }
    y1 += 1;
  }
}
