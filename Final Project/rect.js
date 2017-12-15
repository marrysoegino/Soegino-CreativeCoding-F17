function Pipe() { 
  this.bottom = 150;
  this.x = width;
  this.w = 200;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;

      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    noStroke();
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }

    image(goblin,this.x, height - this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}
