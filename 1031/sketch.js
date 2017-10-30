var x = 100;
var y = 100;
var xspeed = 4;
var yspeed = 5;
var mySound;

function preload(){

	mySound= loadSound('assets/objection.mp3'); 
}

function setup() {
  createCanvas(600, 600);
  

}

function draw() {
	background (0);
	var d = dist(width/2, height/2, mouseX, mouseY);

  	fill (255,0,0);
  	ellipse (x, y, d, d);

 	 x = x + xspeed;
  	
  	 if (x > width || x < 0)  {
     	xspeed = -xspeed;
     	mySound.play();

  	}

  	y = y + yspeed;

  	if (y > height || y < 0) {
	 	  yspeed = -yspeed;
	 	  mySound.play();
  	}

}


   