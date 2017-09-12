size(600,600);
background(0, 0, 0);
int myPoint= 600;
int myEars = 100;

//background
fill(255,255,102);
rect(10, 20, 50, myPoint);
rect(150, 0, 200, myPoint);
rect(500, 70, 100, myPoint);

fill(255,165,0);
rect(400, 0, 50, myPoint);
rect(80, 20, 50, myPoint);


line(0.5, 600, myPoint, 400);
line(0.5, 400, myPoint, 200);
line(0.5, 200, myPoint, 50);


fill(240,207,68);
rect(150,240,230,300);

//neck
fill(0,0,0);
rect(230,325,50,600);

//face shape
beginShape();
fill(249,210,138);
vertex(250,400);
vertex(myEars,250);
vertex(myEars,300);
vertex(250,100);
endShape(CLOSE);

beginShape();
fill(231,141,66);
vertex(250,400);
vertex(500,250);
vertex(500,300);
vertex(250,100);
endShape(CLOSE);

//eyes
beginShape();
fill(225,225,225);
vertex(180,240);
vertex(220,200);
vertex(240,260);
endShape(CLOSE);

fill(231,141,66);
ellipse (200,240,10,20);

beginShape();
fill(225,225,225);
vertex(280,240);
vertex(320,200);
vertex(340,260);
endShape(CLOSE);

fill(249,210,138);
ellipse (300,240,20,10);

//nose
fill(0,0,0);
triangle(250,270,250,350,220,350);

//mouth
line(200,300,250,360);
stroke(225,225,225);
line(350,300,250,360);

//hair
fill(240,207,68);
triangle(250,100,150,150,150,300);
triangle(250,100,325,150,350,300);

fill(250,250,250);
ellipse(270,600,300,250);
//body
fill(255,73,73);
triangle(100,600,450,600,250,450);