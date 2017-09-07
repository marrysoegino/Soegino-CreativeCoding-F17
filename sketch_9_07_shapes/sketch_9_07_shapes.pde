//int myCirclePlace = 400;
//int myEllipse = 100;

//size(500,400);

//DATATYPE
//NAME
//VALUE

//int xPosition = 200;
//float yPos = 200.5;

//line(0.5, 1.5, 70, 40);

//rect(10, 20, 50, 30);
// coordinates of the x,y, then width and height

//(centerX, centerY, width, height)
//ellipse (myEllipse,300,100,70);

// (x2,y2,x3,y3)
//triangle (50,50,400,400,200,300);

//(x,y)
//point (100,200);

//CONSOLE CNTRLS
//println("hello world");
//println("hello world");
//println("hello world");

//println();

//println("hello");
//println("hello");

// STYLE AND COLOR for shapes
size(600,600);
//background(226,223,150);
//fill (150,225,225); //all rgb values
//ellipse (200,300,100,70);

//stroke(225,225,225);//changes the color of the outline shape
//strokeWeight(1);
//fill(247,240,22);
//triangle (50,50,400,400,200,300);

// DRAW A COMPLEX SHAPE
beginShape();
fill (150,225,225);
vertex(50,100);
vertex(300,200);
vertex(200,200);
vertex(150,10);
vertex(120,140);
endShape(CLOSE);