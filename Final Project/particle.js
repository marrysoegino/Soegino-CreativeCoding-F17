
function Bird() {
  this.bottom = 150;
  this.y = height / 2;
  this.x = 70;
  this.health = 1000; 

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    noStroke();
    //imageMode(CENTER);

    image(chicken,this.x,this.y, 100, 100);
    
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y <this.bottom ) {
      this.y = this.bottom;
      this.velocity = 0;
    }

  }

}
