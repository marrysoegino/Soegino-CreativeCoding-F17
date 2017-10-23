var bg;
var frame;
var teddy;
var heart;  
var future;
var song;
var happy;
var door; 
var myFont;





function preload(){
song = loadSound("assets/sad.mp3");
happy = loadSound("assets/happymusic.wav");
myFont = loadFont("assets/Lora-Regular.ttf");

}
function setup() {
   createCanvas(2000,700);
   future = loadImage("assets/sun.jpg");

  bg = loadImage("assets/room.jpg");
  frame = loadImage("assets/pictureframe.jpg");
  teddy = loadImage("assets/teddybear.png");
  heart = loadImage("assets/pixelheart.png");
  door = loadImage("assets/openDoor.png");
  
 
  song.play();

  var y = dist(mouseX,mouseY,860,350);

  if(y<100){
   song.stop();
   happy.play();

    
  }



 
  
}

function draw(){
  drawGif();
  back();
 
  fill(255);
  rect(900,350,100,250);
  drawHearts();
  drawSquare();
  drawDoor();
  drawFrame();
  drawTeddy();
  drawHeart(); 
  
 
 


  fill(255,0,0);
  textFont(myFont);
  textSize(36);
  text('My Despair', 10, 50);

  fill(0,255,0);
  textFont(myFont);
  textSize(36);
  text('Once I Stepped Outside...', 1100, 50);



   drawCharacter();

}
function back(){
  image(bg,0,0,1000,700);

}
function drawCharacter(){

  fill(255,0,0);
  var xc = constrain(mouseX, 50, 1667);
  translate(xc,0);
  push();
  translate(0,500);
  triangle(30, 75, 58, 20, 86, 75);
  pop();


}


function drawFrame(){
  image(frame,480,350,100,100);
if(mouseX>450 && mouseX<550 && mouseY>300 && mouseY<490){
    fill(255);
    textFont(myFont);
    textSize(36);
    text('The picture that we had together is in this room.We were so happy then.',mouseX-100, mouseY-200, 400, 400);
  }


}
function drawTeddy(){
  
  image(teddy,250,370,100,100 );
 

  if(mouseX>250 && mouseX<400 && mouseY>300 && mouseY<400){
    fill(255);
    textFont(myFont);
    textSize(36);
    text('I feel heartbroken. I did not know what happened. This teddy bear haunts me while it sits there in the corner of the room.',mouseX-100, mouseY-200, 500, 400);
  }

}
function drawHeart(){

  image(heart,800,200,100,100);
if(mouseX>800 && mouseX<900 && mouseY>200 && mouseY<400){
    fill(255);
    textFont(myFont);
    textSize(36);
    text('My heart is nailed onto this wall as I suffer in this room.',mouseX, mouseY, 450, 200);
  }
}

function drawGif(){
    image(future,1000,0,1000,700);
   
  
}
function drawDoor(){
image(door,860,350,150,250);

var d = dist(mouseX,mouseY,860,350);
if(d<100 ){
  fill(0);
    textFont(myFont);
    textSize(36);
    text('I cannot stay in here forever.I need to take the next step outwards and find new meaning.',mouseX, mouseY, 500, 400);

}

}

function drawSquare(){

for(var i=0;i<3;i++){


  fill(0,255,0);

  rect((i*300)+1100,(i*200)+170,50,50);

}
var h = dist(mouseX,mouseY,1100,170);
if(h<100 ){
  fill(0);
    textFont(myFont);
    textSize(36);
    text('Then I walked outside my door and a person drops down from the sky.',mouseX-100, mouseY+100, 500, 400);

}
var b = dist(mouseX,mouseY,1400,370);
if(b<100 ){
  fill(0);
    textFont(myFont);
    textSize(36);
    text('It kept getting closer and closer to me.',mouseX-100, mouseY-200, 500, 400);

}
var c = dist(mouseX,mouseY,1700,570);
if(c<100 ){
  fill(255);
    textFont(myFont);
    textSize(50);
    text('As it got closer, I felt complete and I learned how to love again.',mouseX-400, mouseY-500, 500, 400);
}
}
function drawHearts(){
 var k = dist(mouseX,mouseY,1700,570); 
 if(k<100){
   for(var j = 0; j<7;j++){
     for (var y =0; y<7; y++ ){
   image(heart,((j+random(0.5,0.6))*140)+950,((y+random(0.5,0.6))*100)-50,100,100);
    }
    }
  }
}
