var myData; 

function preload(){
	myData = loadJSON("assets/pokemon.json");

}
function setup() {
    createCanvas(600, 600);
    background(255);
   

}

function draw() {
	 var pokeName = myData.pokemon[0].name;
	 var pokeName1 = myData.pokemon[1].name;
	 var pokeName2 = myData.pokemon[2].name;
	 var pokeName3 = myData.pokemon[3].name;
	 var pokeName4 = myData.pokemon[4].name;

	 var capRate = myData.pokemon[0].height; 
	 var capRate1 = myData.pokemon[1].height; 
	 var capRate2 = myData.pokemon[2].height; 
	 var capRate3 = myData.pokemon[3].height; 
	 var capRate4 = myData.pokemon[4].height; 

fill(0);
	text(pokeName,0,100,100,100);
	text(pokeName1,0,200,100,100);
	text(pokeName2,0,300,100,100);
	text(pokeName3,0,400,100,100);
	text(pokeName4,0,500,100,100);

	text("Height Comparisons",width/2,15);
	
	fill(0,255,0);

	 ellipse(300, 100, capRate*2, capRate*2);
	 ellipse(300, 200, capRate1*2, capRate1*2);
	 ellipse(300, 300, capRate2*2, capRate2*2);
	fill(255,0,0);
	 ellipse(300, 400, capRate3*2, capRate3*2);
	 ellipse(300, 500, capRate4*2, capRate4*2);
}


   