//drum set that pulsates when you click on it 

var drum; 
var drum1;
var drum2;
var drum3;
var drum4;
var drum5;
var drum6;
var drum7;
var drum8;
var myBass;
var myCymbal;
var myHat;
var mySnare;
var myToms;

function preload(){

  myBass = loadSound('assets/bass.wav');
  myCymbal = loadSound('assets/cymbal.wav');
  myHat = loadSound ('assets/hihat.wav');
  mySnare = loadSound('assets/snare drum.wav');
  myToms = loadSound('assets/toms.wav');

}
function setup(){
createCanvas(600,600);

drum = new Drum(270, 350,50,50);//bass
drum1 = new Drum(200,250,30,20);//cymbal
drum2 = new Drum(350,250,30,20);//cymbal
drum3 = new Drum(200,300,20,20);//hi hat
drum4 = new Drum(350,300,20,20);//hi hat
drum5 = new Drum(250,300,15, 15);//snare
drum6 = new Drum(300,300,15, 15);//snare
drum7 = new Drum(250,250,30,10);//toms
drum8 = new Drum(300,250,30,10);//toms

}
function draw(){
background(0);

drum.jitter();
drum1.vibrate();//cymbal
drum2.vibrate();//cymbal
drum5.wide();//snare
drum6.wide();//snare
drum7.shake();//toms
drum8.shake();//toms
drum3.rotate();//hi hat
drum4.rotate();//hi hat

drum.display();
drum1.display();
drum2.display();
drum3.display();
drum4.display();
drum5.display();
drum6.display();
drum7.display();
drum8.display();


}

function Drum(xPos,yPos,mySize,mySize){
this.x = xPos;
this.y = yPos;
this.size = mySize;
this.speed = 1;

this.rotate = function(){//hi hats
  var h = dist(mouseX,mouseY,200,300);
  var i = dist(mouseX,mouseY,350,300);
  if (h<20||i<20){
    translate(1,1);
    myHat.play();
    background(255,0,255);
  }
}

this.shake = function(){//toms
var t = dist(mouseX,mouseY,250,250);
  var u = dist(mouseX,mouseY,300,250);
  if (t<20||u<20){
    this.y += random(-this.speed, this.speed);
    myToms.play();
    background(0,255,255);
  }

}

this.vibrate = function(){//cymbals
  var c = dist(mouseX,mouseY,200,250);
  var d = dist(mouseX,mouseY,350,250);
  if (c<20||d<20){
    this.x += random(-this.speed, this.speed);
    myCymbal.play();
    background(255,0,0);
  }
}

this.jitter = function(){ // Bass
    var b = dist(mouseX,mouseY,270,350);
    if(b<20){
    
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    myBass.play();
    background(0,255,0);
    }
}

this.wide = function(){//Snare
var s = dist(mouseX,mouseY,250,300);
var v = dist(mouseX,mouseY,300,300);
    if(s<20 || v<20){
    this.size += random(-1, 1);
    this.size += random(-1, 1);
    mySnare.play();
    background(0,0,255);
    }

}


this.display = function(){
  noStroke();
  fill(255);
  ellipse(this.x,this.y,this.size,this.size);

}

};

