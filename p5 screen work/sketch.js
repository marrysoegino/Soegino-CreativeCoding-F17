function setup(){
createCanvas(600,500);

// console.log("launch the screen");//print statements
}
function draw(){
	background(255);
	fill(0,0,255);
	rect(width/2,0,width/2,height);

	fill(255,0,0);
	rect(0,150,width/2,400);

	if (mouseIsPressed) {
	fill(0,128,128);
	rect(0,0,width/2,height/3);
	 }

	if(mouseX>500){
	 	fill(255,255,0);
	 	rect(0,0,width,height);
	 }


	// var myDistance = dist(mouseX,mouseY,pmouseX,pmouseY);
	
	// fill(myDistance);
	// strokeWeight(myDistance);



	// if (mouseIsPressed) {
		
	// 	line(mouseX,mouseY,pmouseX,pmouseY);
	// }
}

// function mouseDragged(){
// noStroke();
// fill(255,0,0);
// ellipse(mouseX,mouseY,50,50);

// }