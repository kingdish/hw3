function setup() {
  createCanvas(400, 400);
  noFill();
  background(0,0,0);
  var i = 1;
  while (i < numOfRings) {
    singleRing(width/2, height/2, width / (numOfRings - 1.5) * i, width / (numOfRings - 1.5) * i + ringWidth);
    i += 1;
  }
  centerCircle(width/2, height/2, ringWidth);
}

var gap = 30;
var numOfRings = 5;
var ringWidth = 80;
var maxWhite = 230;
var changeSlope = 55;
var currColor;

function singleRing(x, y, innerR, outerR) {
  var step = (outerR - innerR) / 4;
  var i = 0;
  var outerSlope = (maxWhite - changeSlope) / step;
  var innerSlope = changeSlope / step;
  currColor = color(0,0,0);
  
  while (i < ringWidth / 4) {
    stroke(currColor);
    currColor = color(red(currColor) + outerSlope, green(currColor) + outerSlope, blue(currColor) + outerSlope);
    ellipse(x, y, outerR)
    outerR -= 1;
    i += 1;
  }
  i = 0;
  while (i < ringWidth / 4) {
    stroke(currColor);
    currColor = color(red(currColor) + innerSlope, green(currColor) + innerSlope, blue(currColor) + innerSlope);
    ellipse(x, y, outerR)
    outerR -= 1;
    i += 1;
  }
  i = 0;
  while (i < ringWidth / 4) {
    stroke(currColor);
    currColor = color(red(currColor) - innerSlope, green(currColor) - innerSlope, blue(currColor) - innerSlope);
    ellipse(x, y, outerR)
    outerR -= 1;
    i += 1;
  }
  i = 0;
  while (i < ringWidth / 4) {
    stroke(currColor);
    currColor = color(red(currColor) - outerSlope, green(currColor) - outerSlope, blue(currColor) - outerSlope);
    ellipse(x, y, outerR)
    outerR -= 1;
    i += 1;
  }
}

function centerCircle(x, y, radius) {
  var step = radius / 2;
  var i = 0;
  var outerSlope = (255 - 30 * 2) / step;
  var innerSlope = 30 * 3 / step;
  currColor = color(0,0,0);
  
  noFill();
  noStroke();
  while (i < ringWidth / 2) {
    stroke(currColor);
    currColor = color(red(currColor) + outerSlope, green(currColor) + outerSlope, blue(currColor) + outerSlope);
    ellipse(x, y, radius);
    radius -= 1;
    i += 1;
  }
  i = 0;
  while (i < ringWidth / 2) {
  stroke(currColor);
  currColor = color(red(currColor) + innerSlope, green(currColor) + innerSlope, blue(currColor) + innerSlope);
  ellipse(x, y, radius);
  radius -= 1;
  i += 1;
  }
}
