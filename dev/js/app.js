
/* NOTE TO SELF */
// Yummly app id 68ac39de
// Yummly auth key 3f06f41e76c83498e7053f890bef8d89
// eatFeels.getRecipes = the search function

var eatFeels = {};

/* GLOBAL VARIABLES */

	eatFeels.appID = '68ac39de';
	eatFeels.authKey = '3f06f41e76c83498e7053f890bef8d89';

	//three search parameters
	// eatFeels.userMood = $('input:checked').attr('value' ); // happy, sad, neutral
	eatFeels.userNum = '1'; // solo, pair, group
	eatFeels.userTime = 'under5'; // under 5 mins, under 30 mins, over 30 mins


/********************/

/* INIT FUNCTION */

	eatFeels.init = function(){

		// eatFeels.keywordCheck();
		eatFeels.userMood = $('input:checked').val();
		console.log(eatFeels.userMood);
		eatFeels.getRecipes();

	};

/********************/

/* DEFINING 'query' ARGUMENT for keyword search */

	// eatFeels.keywordCheck = function() {

	// 	// 
	// 	if () {

	// 	} else {}

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
		   	 rating: 5,
		   	 maxResult: 20,
			 requirePictures: true,	  
		     q: query //search phrase
		     // maxTotalTimeInSeconds: eatFeels.userTime, //time they want

		   },
		   dataType: 'jsonp',
		   success: function(response){
		   	// var nameofVar = result; //retun
		     console.log('it works');
		     eatFeels.displayInfo(response);
		   }
		 });	

	};

/********************/


/* RETURN THE SEARCh RESULTS */

	eatFeels.displayInfo=function(data){

	for(var i=0; i<data.matches.length; i++){
	$('.results').append('<li>' + data.matches[i].recipeName + '</li>');
	$('#recipe').append('<img src=' + data.matches[i].smallImageUrls[0].replace('=s90','') + '>');

	}
};

/********************/


/* INJECT AND STYLE RESULTS */


/********************/

/* DOCUMENT READY */

	$(function() {
		console.log('script is running');
		// eatFeels.init();
		// on click of the button
		$('button').on('click', function() {
			event.preventDefault();
			eatFeels.init();
		});
	});

/********************/
