
function setup(){
createCanvas(600,600);

}

function draw(){
	background(255);

	var mapRotate = map(mouseX,0,width,0,2*PI);
/*
push();
fill(255,0,0);
translate(50,height/2);
rotate(mapRotate*PI);
rect(0,0,50,50);

pop();

push();
fill(0,255,0);
translate(150,height/2);
rotate(mapRotate*PI*(5/2));
rect(0,0,50,50);

pop();

push();
fill(0,0,255);
translate(250,height/2);
rotate(mapRotate*PI/5);
rect(0,0,50,50);

pop();
*/

 for (var i = 0; i < 1; i += 1) {
        push();
        fill(255, 0, 0);
        translate(50, height / 2);
        rotate(mapRotate * PI * (i + 2));
        rect(0, 0, 50, 50);

        pop();

        push();
        fill(0, 255, 0);
        translate(150, height / 2);
        rotate(mapRotate * PI * (i + 3));
        rect(0, 0, 50, 50);

        pop();

        push();
        fill(0, 0, 255);
        translate(250, height / 2);
        rotate(mapRotate * PI * (i + 4));
        rect(0, 0, 50, 50);

        pop();
    }


}