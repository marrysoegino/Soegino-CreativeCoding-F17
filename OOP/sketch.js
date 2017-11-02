var myShape;
var myShape2; 
var myShape3;

function setup(){
	createCanvas(600,600);
	myShape= new Shape(250,250,5,5);
	myShape2 = new Shape(300,400,6,3);
	myShape3 = new Shape(200,300,9,10);

	
}
function draw(){
	background(255);
	myShape.display();
	myShape.animate();
	myShape.diameter();
	myShape2.display();
	myShape2.animate();
	myShape2.diameter();
	myShape3.display();
	myShape3.animate();
	myShape3.diameter();

}


function Shape(xPos,yPos,myXVel,myYVel,mySize,mySize){
	
	this.x=xPos;
	this.y=yPos;
	this.xvel=myXVel;
	this.yvel=myYVel;
	this.size=mySize;

	this.diameter = function(){
		this.size = this.size +5;
	}

	this.animate= function(){
		this.x = this.xvel+this.x;
		this.y = this.yvel+ this.y;

		if(this.x<0 || this.x>width){
			this.xvel= -1;
		}
		else if(this.y<0||this.y>height){
			this.yvel = -1;
		}
	}

	this.display = function(){

		ellipse(this.x,this.y,this.size,this.size);

	}

};
function Shape2(xPos,yPos,myXVel,myYVel,mySize,mySize){
	
	this.x=xPos;
	this.y=yPos;
	this.xvel=myXVel;
	this.yvel=myYVel;
	this.size=mySize;

	this.diameter = function(){
		this.size = this.size +7;
	}

	this.animate= function(){
		this.x = this.xvel+this.x;
		this.y = this.yvel+ this.y;

		if(this.x<0 || this.x>width){
			this.xvel= -1;
		}
		else if(this.y<0 || this.y>height){
			this.yvel = -1;
		}
	}

	this.display = function(){

		ellipse(this.x,this.y,this.size,this.size);

	}

};
function Shape3(xPos,yPos,myXVel,myYVel,mySize,mySize){
	
	this.x=xPos;
	this.y=yPos;
	this.xvel=myXVel;
	this.yvel=myYVel;
	this.size=mySize;
	
	this.diameter = function(){
		this.size = this.size +7;
	}



	this.animate= function(){
		this.x = this.xvel+this.x;
		this.y = this.yvel+ this.y;

		if(this.x<0 || this.x>width){
			this.xvel= -1;
		}
		else if(this.y<0||this.y>height){
			this.yvel = -1;
		}
	}

	this.display = function(){

		ellipse(this.x,this.y,this.size,this.size);

	}

};