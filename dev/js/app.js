// Yummly app id 68ac39de
// Yummly auth key 3f06f41e76c83498e7053f890bef8d89

var eatFeels = function() {};

/* GLOBAL VARIABLES */

	eatFeels.appID = "68ac39de";
	eatFeels.authKey = "3f06f41e76c83498e7053f890bef8d89";

/********************/

/* INIT FUNCTION */

	eatFeels.init = function(){

		eatFeels.getRecipes('stew');

	};

/********************/


/* SEARCHING FOR RECIPES */

	eatFeels.getRecipes = function(query) {

		$.ajax({
		   url: 'http://api.yummly.com/v1/api/recipes',
		   type: 'GET',
		   data: {
		     format: 'jsonp',
		   	 _app_id: eatFeels.appID,
		   	 _app_key: eatFeels.authKey,
		     q: query, //search phrase
			 // allowedCuisine: 'French',		     
		   },
		   dataType: 'jsonp',
		   success: function(result){
		     console.log('it works');
		     console.log(result); 
		   }
		 });	

	}

/********************/
eatFeels.displayPieces = function(data){
	//$.each loops over each piece of data,
    $.each(data, function(i, piece) {
    	console.log(piece.title);

    	var title = $('<h2>').text(piece.title);
    	var artist = $('<p>').addClass('artist').text(piece.principalOrFirstMaker);
    	var image = $('<img>').attr('src', piece.webImage.url);
    	var artPiece = $('<div>').addClass('piece').append(image, title, artist); //combines the preceding three variables

    	//creates the html structure from the combined variables
    	$('#artwork').append(artPiece);
    })
};

eatFeels.updateTitle = function(subject) {
	$('#page-title').find('span').text(subject);
}



/* DOCUMENT READY */

	$(function() {
		eatFeels.init();
	});

/********************/
