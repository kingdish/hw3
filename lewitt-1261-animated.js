function setup() {
  createCanvas(400, 400);
  background(0,0,0);
}

function draw() {
  clear();
  background(0,0,0);
  noFill();
  var i = 1;
  while (i < numOfRings) {
    singleRing(width/2, height/2, width / (numOfRings - 1.5) * i, width / (numOfRings - 1.5) * i + ringWidth);
    i += 1;
  }
  centerCircle(width/2, height/2, ringWidth);
  i = 1;
  if (up) {
    if (numOfRings < maxRings) {
      numOfRings += 1;
    } else {
      up = false;
      numOfRings -= 1;
    }
  } else {
    if (numOfRings > minRings) {
      numOfRings -= 1;
    } else {
      up = true;
      numOfRings += 1;
    }
  }
  wait(50);
}

var maxRings = 7;
var minRings = 5;
var up = true;
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

//https://stackoverflow.com/questions/14226803/javascript-wait-5-seconds-before-executing-next-line
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
