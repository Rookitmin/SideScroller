var Man;
var gravity;
var upForce;
var Obsticle1;
var left;

function setup() {
	frameRate(20000);
	gravity = createVector(0, 0.1);
	upForce = createVector(0, -1);
	left = createVector(-4, 0);
  createCanvas(640, 360);
	Man = new person ();
	Man.pos.y = 309;
	Obsticle1 = new person ();
	Obsticle1.applyForce(left);
	Obsticle1.pos.y = 309;
}

function draw() {
  background(51);
	fill(150);
	Man.update();
	Man.display();
	Man.edges();
	Man.applyForce(gravity);
	fill(255, 0, 0);
	Obsticle1.update();
	Obsticle1.display();
	if (Obsticle1.pos.x < -50) {
		Obsticle1.pos.x = random(640, 700);
	}
} 

function keyTyped() {
	Man.vel.y  = -3;
}
