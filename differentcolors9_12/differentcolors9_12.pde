void setup(){
size(600,600);
background(255);


}

void draw(){

}
 void mousePressed(){
   if(mouseX<300 && mouseY>400){
    noStroke();
    fill(0,128,128);
    rect(0,400,300,400);
   }
 }

void mouseMoved(){
  if(mouseX<300==true && mouseY< (height-200)){
    noStroke();
    fill(0,146,255);
    rect(0,0,300,400);
  }
  else if(mouseX>300 && !(mouseX >450)){
    fill(255,0,0);
    rect(300,0,600,600);
  }
  else if (mouseX >450){
    background(255,255,0);
  }
  else{
  fill(255);
  rect(0,0,width,height);
  }
}
void mouseReleased(){
fill(255);
rect(0,400,300,400);
}