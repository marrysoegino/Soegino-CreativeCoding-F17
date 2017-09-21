int x,y,w,h,speedX,speedY;
int sideX,sideY,sideH,sideW;
int side1X,side1Y,side1H,side1W;
int tPX,tPY,tPW,tPH,tPS;
int bPX,bPY,bPW,bPH,bPS;

int gX,gY,gW,gH,gS;
int bX,bY,bW,bH,bS;

int lives;
int losingScore = 0;

boolean left,right;

void setup(){
size(900,900);

//dimensions of the ball
x= width/2;
y= height/2;
w= 50;
h=50;
speedX = 3;
speedY = 4;

//top paddle
tPX = width/2;
tPY = 100;
tPW = 100;
tPH = 10;
tPS = 5;

//bottom paddle
bPX = width/2;
bPY = 800;
bPW = 100;
bPH = 10;
bPS = 5;

//gain life points
gX = 51;
gY = 0;
gW = 50;
gH = 100;
gS = 5;

//lose life points
bX = 799;
bY = 0;
bW = 50;
bH = 100;
bS = 5;

//side of the left wall
  sideX= 0;
  sideY=0;
  sideW= 50;
  sideH = 900;
  
  //side of the right wall
  side1X= 850;
  side1Y=0;
  side1W= 50;
  side1H = 900;
  
  lives = 5;
  textSize(20);


}
void draw(){
 
  background(255);
  fill(0,128,0);
  ellipse(x,y,w,h);
  moveBall();
  wallBounce();
  drawSide();
  drawSide1();
  wallCollision();
  
  topPaddle();
  bPaddle();
  movePaddle();
  tBoundaries();
  bBoundaries();
  tpaddleBounce();
  bpaddleBounce();
  
  gLife();
  bLife();
  gBounce();
  bBounce();

  lives();
  gameOver();
  
  fill(255,0,0);
  rect(0,0,width,10);
  fill(0);
  text("-1 Life",width/2,13);
  fill(255,0,0);
  rect(0,890,width,10);
  fill(0);
  text("-1 Life",width/2,903);
  
}


//left side wall
void drawSide(){
  fill(0);
  rect(sideX,sideY,sideW,sideH);
  }
//right side wall
void drawSide1(){
  fill(0);
  rect(side1X,side1Y,side1W,side1H);
  }
void wallCollision(){
  if(x-w/2 <sideX+sideW ){
  speedX = -speedX;
  }
  else if(x+w/2>side1X-side1W/10){
  speedX = -speedX;
  }
}

void topPaddle(){
  fill(0);
  rect(tPX,tPY,tPW,tPH);
}
//bottom paddle
void bPaddle(){
  fill(0);
  rect(bPX,bPY,bPW,bPH);
}

//moving the paddle
void movePaddle(){
  if(right){
  tPX = tPX + tPS;
  bPX = bPX + bPS;
  }
  if (left){
  tPX = tPX - tPS;
  bPX = bPX - bPS;
  }
}

//set limits for the paddles

void tBoundaries(){
  if(tPX-tPW/10<0){
    tPX = tPX+ tPS;
  }
  if(tPX+tPW>width){
    tPX = tPX- tPS;
  }
}
void bBoundaries(){
  if(bPX-bPW/10<0){
    bPX = bPX+ bPS;
  }
  if(bPX+bPW>width){
    bPX = bPX- bPS;
  }
}

//contact with the top paddle
void tpaddleBounce(){
  if (y-h/2<tPY+tPW/10 && x+w/2>tPX-tPH/10 ){
  speedY = -speedY;
  }
}

void bpaddleBounce(){
  if (y+h/2>bPY-bPW/10 && x-w/2<tPX+tPH/10){
  speedY = -speedY;
  }
}

//keyControls for the paddles
void keyPressed(){
  
  if (keyCode == LEFT ) {
  left = true;
  }
   if (keyCode == RIGHT){
  right = true;
  }
}
void keyReleased(){
   if (keyCode == LEFT){
  left = false;
  }
   if (keyCode == RIGHT){
  right = false;
  }
}
  
//speed of the ball
void moveBall(){
 x = x+speedX;
 y = y+speedY;
}
//green and red rectangle
void gLife(){
fill(0,128,0);
rect(gX,gY,gW,gH);
  gY = gY+gS;

  if(gY-gH/10<0){
    gS=5;
    
  }
  if(gY+gH>height){
    gY = gY- gS;
    gS=-gS;
  }
}
void bLife(){
fill(255,0,0);
rect(bX,bY,bW,bH);
bY = bY+bS;

if(bY-bH/10<0){
    bS=5;
    
  }
  if(bY+bH>height){
    bY = bY- bS;
    bS=-bS;
  }
}

  //contact with the left and right
void gBounce(){
  if (x-w/2<gX+gW/2 && y-h/2<gY+gH/2){
  speedX = -speedX;
  //lives = lives + 1;
  }
}

void bBounce(){
  if (x+w/2>gX-gW/2 && y+h/2>gY-gH/2){
  speedX = -speedX;
  //lives = lives - 1;
  }
}

//pushes the ball off the wall
void wallBounce(){
  if(x > width - w/2){
    speedX = -speedX;
  }
  else if(x<0 +w/2){
    speedX = -speedX;
  }
  if(y>height- h/2){
  lives = lives - 1;
  speedY=-speedY;
  }
  else if(y<0 +h/2){
   lives = lives - 1;
  speedY = -speedY;
  }
}
//life meter
void lives(){
fill(0);
text("Lives:",70,100);
text(lives,130,100);
}
//game over screen
void gameOver(){
if (lives == losingScore){
fill(255,0,0);
text("Game Over",400,410);
x=450;
y=450;
speedX =0;
speedY =0;
}
}