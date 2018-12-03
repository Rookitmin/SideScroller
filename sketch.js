var Man;
var gravity;
var upForce;

function setup() {
	frameRate(20000);
	gravity = createVector(0, 0.1);
	upForce = createVector(0, -1)
  createCanvas(640, 360);
	Man = new person ();
	Man.acc.add(0, 0.01);
}

function draw() {
  background(51);
	Man.update();
	Man.display();
	Man.edges();
	Man.applyForce(gravity);
} 
function keyTyped() {
	Man.vel.y  = -3;
}
