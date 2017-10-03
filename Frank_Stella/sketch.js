

function setup(){
createCanvas(600,500);
fill(255,0,0);
rect(0,0,width,height);


for(var i=0; i<27; i++){//for the x axis

		fill(0);
		rect((i*23)+3,0, 20 ,height);
}
fill(255,0,0);
rect(0,100,width,300);

fill(0);
triangle(600,100,600,400,440,400);
triangle(0,300,0,400,85,400);
triangle(200,100,250,100,225,125);
//inner painting



}



function draw(){

for (var j=0; j<11;j++){
	strokeWeight(26);
//line((j*35)-180,(j*5)+100,(j*30)+100,400);	
line((j*40)-170,(j)+90,(j*30)+100,400);
}
for (var h=0; h<12;h++){
	strokeWeight(26);
//line((j*35)-180,(j*5)+100,(j*30)+100,400);	
line((h*32)+260,(h)+90,(h*30)+100,400);
}

}