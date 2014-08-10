
/* NOTE TO SELF */
// Yummly app id 68ac39de
// Yummly auth key 3f06f41e76c83498e7053f890bef8d89
// eatFeels.getRecipes = the search function

var eatFeels = {};

/* GLOBAL VARIABLES */

	eatFeels.appID = '68ac39de';
	eatFeels.authKey = '3f06f41e76c83498e7053f890bef8d89';

/********************/

/* INIT FUNCTION */

	eatFeels.init = function(){

		eatFeels.userMood = $('input[name=usermood]:checked').val();
		console.log('the user selected ' + eatFeels.userMood);
		eatFeels.getRecipes();

	};


/********************/

/* SEARCHING FOR RECIPES */

	eatFeels.getRecipes = function(query) {

		var userServings = $('#servingsize').val();
		var userTime = $().val();

			console.log('keyword check is running');
			console.log('searching for ' + userServings + ' servings');
			// if statements to detect results

			if (eatFeels.userMood == 'happy') {
				console.log('searching for happy foods...');

				$.ajax({
				   url: 'http://api.yummly.com/v1/api/recipes?'+'&maxTotalTimeInSeconds='+userTime,
				   type: 'GET',
				   data: {
				     format: 'jsonp',
				   	 _app_id: eatFeels.appID,
				   	 _app_key: eatFeels.authKey,
				   	 rating: 5,
				   	 maxResult: 12,
					 requirePictures: true,
					 q: 'party'
				   },
				   dataType: 'jsonp',
				   success: function(response){
				     console.log('running SUCCESS with happy party of 1');
				     eatFeels.displayInfo(response);
				   }
				 });	

			} else if (eatFeels.userMood == 'sad') {
				console.log('searching for sad foods...');

				$.ajax({
				   url: 'http://api.yummly.com/v1/api/recipes?',
				   type: 'GET',
				   data: {
				     format: 'jsonp',
				   	 _app_id: eatFeels.appID,
				   	 _app_key: eatFeels.authKey,
				   	 rating: 5,
				   	 maxResult: 12,
					 requirePictures: true,
					 q: 'better'

				   },
				   dataType: 'jsonp',
				   success: function(response){
				     console.log('running SUCCESS with sad loser party of 1');
				     eatFeels.displayInfo(response);
				   }
				 });

			} else {

				alert('you need to select a mood first!');
				$('input').empty();

			}
		

	};

/********************/


/* RETURN THE SEARCH RESULTS */

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
