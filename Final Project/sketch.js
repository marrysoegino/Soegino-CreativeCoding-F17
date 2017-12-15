// followed the tutorial code of Daniel Shiffman and altered it to make a different game


var bird;
var chicken;
var goblin;
var bg; 
var bg1; 
var bgSound;
var chickenSound;
var myFont;
var pipes = [];
var mic;
var sliderTop;
var sliderBottom;
var clapping = false;

function preload(){
chicken = loadImage("assets/images/chicken_11.gif");
goblin = loadImage("assets/images/goblin_08.png");
bg = loadImage("assets/background.jpg");
bg1 = loadImage("assets/background1.png");
chickenSound = loadSound("assets/chicken.wav");
bgSound = loadSound("assets/background.wav");
myFont = loadFont("assets/AmaticSC-Regular.ttf");

}

function setup() {
  createCanvas(600, 700);
  mic = new p5.AudioIn();
  mic.start();
  bird = new Bird();
  pipes.push(new Pipe());
  sliderTop = 0.1;
  sliderBottom = 0.05;

bgSound.play();
bgSound.loop();


}

function draw() {

   
  
if(keyCode === LEFT_ARROW){
    background(bg);
    textSize(48);
    fill(0);
    text("HP:", 10, 40);
    text(bird.health, 50, 40);
  var vol = mic.getLevel();

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
      bird.health += -10; 
      chickenSound.play();

    }
    if (bird.health == 0){

    textSize(100);
    textFont(myFont);
    text("Game Over",50, 200);
    pipes[i].destroy();
    chickenSound.stop();
    bgSound.stop();

    }
   

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }


  }

  bird.update();
  bird.show();
  

  if (frameCount % 150 == 0) {
    pipes.push(new Pipe());
  }

  var thresholdTop = sliderTop;
  var thresholdBottom = sliderBottom;

  if (vol > thresholdTop && !clapping) {
    bird.up();
    clapping = true;
  }

  if (vol < thresholdBottom) {
    clapping = false;
  }

  fill(0, 255, 0);
  //console.log(vol);
  noStroke();
  var y = map(vol, 0, 1, height, 0);
  rect(width - 50, y, 50, height - y);

  var ty = map(thresholdTop, 0, 1, height, 0);
  stroke(255, 0, 0);
  strokeWeight(4);
  line(width - 50, ty, width, ty);

  var by = map(thresholdBottom, 0, 1, height, 0);
  stroke(0, 0, 255);
  strokeWeight(4);
  line(width - 50, by, width, by);

}
else if (keyCode === RIGHT_ARROW){
  background(bg);
  textSize(32);
  fill(255);
  text("Left alone in the woods, you worry you will get eaten. Using your voice, try to survive as long as possible. ", 35, 200, 500, 400);
  fill(212,145,137);
  text("Press the left arrow key to play.",35, 450);
}
else{
  background(bg1);
  textSize(100);
  textFont(myFont);
  text("Screaming Chicken",35, 200);
  textSize(20);
  fill(0);
  text("Press the right arrow key to continue.",150, 450,500,400);
}
}


