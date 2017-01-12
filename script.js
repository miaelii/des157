// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255);
  colorMode(HSB, 360, 100, 100); //turquoise
  background(21,35,65);
  noStroke();
  noSmooth();
  frameRate(9);
}

function draw() {
  // statements here
  if (mouseIsPressed) {
tint(255, 127);
  fill(333,random(21,24),random(40,90),random(10,100)); //random shades of green

    ellipse(mouseX, mouseY, 150, 150);
  } else {
tint(255, 127);
   fill(100,random(16,30),random(30,60),random(10,100)); //random shades of purple

  }
  ellipse(mouseX, mouseY, 100, 100);
  ellipse(mouseX, mouseY, 70,70);
}
