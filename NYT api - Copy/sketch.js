var myData;
var url;

var baseUrl;
var query;
var appID;

var searchTerms = []; //make an array to store search terms
var searchIndex = 0;

function setup() {

	//make a set of search terms stored in an array for easy switching
	searchTerms[0] = "Anime";
	searchTerms[1] = "Games";
	searchTerms[2] = "Memes";
	searchTerms[3] = "Food";
	searchTerms[4]= "Music";

	//construct the base of your URL
	baseUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
	query = searchTerms[0];
	appID = "api-key=514d0313e8cc4426a5ddb3708dc430e6"; //your API key here

	url = baseUrl + "q=" +  query + "&" + appID;

	setInterval(queryData, 5000);

}

//dataResponse() is our callback function when we receive data
function dataResponse(data){
	myData = data;
	var articles = data.response.docs;

	for(var i =0; i<articles.length;i++){
		createElement('h1',articles[i].headline.main);
		createP(articles[i].snippet);
	}
	
}

function queryData(data){

	loadJSON(url, dataResponse);



	if(searchIndex < 2){
		searchIndex++;
	}
	else searchIndex=0;

	query = searchTerms[searchIndex];

	url = baseUrl + "q=" +  query + "&" + appID;

}