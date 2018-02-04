function setup() {
	createCanvas(700, 700);
}

function draw() {
  clear();
  background(255,255,255);
  upperRectangleGroup(0, 0, width, 40, c);
  fill('black');
  rect(0, 320, width, 40);
  lowerRectangleGroup(0, 360, width / 16, 340, c);
  if (c == 'black') {
  	c = 'white';
  } else {
  	c = 'black';
  }
  wait(500);
}

var c = 'black';

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

//https://stackoverflow.com/questions/14226803/javascript-wait-5-seconds-before-executing-next-line
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) { //noprotect
     end = new Date().getTime();
  }
}
