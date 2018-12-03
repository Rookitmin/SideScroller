function person() {
  this.pos = createVector(5, 0);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    // var f = force;
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    stroke(255);
    rect(this.pos.x, this.pos.y, 40, 50);
  }

  this.edges = function() {
    if (this.pos.y + 50 > height) {
      this.vel.y *= -1;
      this.pos.y = height - 50;
    }
		
		if (this.pos.y < 0) {
			this.vel.y *= -1;
      this.pos.y = 0;
		}

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
  }
}
