var mySound;

function preload(){

mySound = loadSound("assets/jail.mp3");
  
}
function setup() {
    createCanvas(600, 600);
}

function draw() {
}
function keyPressed(){
mySound.playMode('sustain');
mySound.play();

}
function mousePressed(){
mySound.playMode('restart');
mySound.play();
}




   