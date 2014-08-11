
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

/* INTERACTIVE UI ELEMENTS */


/********************/

/********************/

/* SEARCHING FOR RECIPES */

	eatFeels.getRecipes = function(query) {

		var userServings = $('#servingsize').val();
		var userTime = $('input[name=preptime]:checked').val();

			console.log('keyword check is running');
			console.log('searching for ' + userServings + ' servings');
			
/* KEYWORD CHECKS */
			// if HAPPY and a GROUP
				if (eatFeels.userMood == 'happy' && userServings == 3) {
					console.log('searching for happy group foods...');

					$.ajax({
					   url: 'http://api.yummly.com/v1/api/recipes?'+'&maxTotalTimeInSeconds='+userTime,
					   type: 'GET',
					   data: {
					     format: 'jsonp',
					   	 _app_id: eatFeels.appID,
					   	 _app_key: eatFeels.authKey,
					   	 rating: 5,
					   	 maxResult: 9,
						 requirePictures: true,
						 q: 'party'
					   },
					   dataType: 'jsonp',
					   success: function(response){
					     console.log('running SUCCESS with serving size ' + userServings);
					     eatFeels.displayInfo(response);
						 console.log(response);
						 if(response.matches.length <1){
						 	alert('no recipes found');
						 }
					   }
					 });	

			// else if SAD and a GROUP
				} else if (eatFeels.userMood == 'sad'&& userServings == 3) {
					console.log('searching for sad group foods...');

					$.ajax({
					   url: 'http://api.yummly.com/v1/api/recipes?'+'&maxTotalTimeInSeconds='+userTime,
					   type: 'GET',
					   data: {
					     format: 'jsonp',
					   	 _app_id: eatFeels.appID,
					   	 _app_key: eatFeels.authKey,
					   	 rating: 5,
					   	 maxResult: 9,
						 requirePictures: true,
						 q: 'comfort'

					   },
					   dataType: 'jsonp',
					   success: function(response){
					     console.log('running SUCCESS with sad loser party of 3 or more');
					     eatFeels.displayInfo(response);
					     console.log(response);
					     if(response.matches.length <1){
					     	alert('no recipes found');
					     }
					   }
					 });

			// else if HAPPY and a PAIR
				} else if (eatFeels.userMood == 'happy' && userServings == 2) {
					console.log('searching for happy date foods...');

					$.ajax({
					   url: 'http://api.yummly.com/v1/api/recipes?'+'&maxTotalTimeInSeconds='+userTime,
					   type: 'GET',
					   data: {
					     format: 'jsonp',
					   	 _app_id: eatFeels.appID,
					   	 _app_key: eatFeels.authKey,
					   	 rating: 5,
					   	 maxResult: 9,
						 requirePictures: true,
						 q: 'date night'

					   },
					   dataType: 'jsonp',
					   success: function(response){
					     console.log('running SUCCESS with happy date night');
					     eatFeels.displayInfo(response);
					     console.log(response);
					     if(response.matches.length <1){
					     	alert('no recipes found');
					     }
					   }
					 });

			// else if SAD and a PAIR
				} else if (eatFeels.userMood == 'sad' && userServings == 2) {
					console.log('searching for sadness for two');

					$.ajax({
					   url: 'http://api.yummly.com/v1/api/recipes?'+'&maxTotalTimeInSeconds='+userTime+'&allowedCourse[]=course^course-Desserts',
					   type: 'GET',
					   data: {
					     format: 'jsonp',
					   	 _app_id: eatFeels.appID,
					   	 _app_key: eatFeels.authKey,
					   	 rating: 5,
					   	 maxResult: 9,
						 requirePictures: true,
						 q: 'for two',


					   },
					   dataType: 'jsonp',
					   success: function(response){
					     console.log('running SUCCESS with sadness for two');
					     eatFeels.displayInfo(response);
					     console.log(response);
					     if(response.matches.length <1){
					     	alert('no recipes found');
					     }
					   }
					 });

			// else if HAPPY and ALONE
				} else if (eatFeels.userMood == 'happy' && userServings == 1) {
					console.log('searching for solo happiness');

					$.ajax({
					   url: 'http://api.yummly.com/v1/api/recipes?'+'&maxTotalTimeInSeconds='+userTime,
					   type: 'GET',
					   data: {
					     format: 'jsonp',
					   	 _app_id: eatFeels.appID,
					   	 _app_key: eatFeels.authKey,
					   	 rating: 5,
					   	 maxResult: 9,
						 requirePictures: true,
						 q: 'for one'

					   },
					   dataType: 'jsonp',
					   success: function(response){
					     console.log('running SUCCESS with solo happiness');
					     eatFeels.displayInfo(response);
					     console.log(response);
					     if(response.matches.length <1){
					     	alert('no recipes found');
					     }
					   }
					 });

			// else if SAD and ALONE
				} else if (eatFeels.userMood == 'sad' && userServings == 1) {
					console.log('searching for lonely sadness');

					$.ajax({
					   url: 'http://api.yummly.com/v1/api/recipes?'+'&maxTotalTimeInSeconds='+userTime,
					   type: 'GET',
					   data: {
					     format: 'jsonp',
					   	 _app_id: eatFeels.appID,
					   	 _app_key: eatFeels.authKey,
					   	 rating: 5,
					   	 maxResult: 9,
						 requirePictures: true,
						 q: 'better than'

					   },
					   dataType: 'jsonp',
					   success: function(response){
					     console.log('running SUCCESS with lonely sadness');
					     eatFeels.displayInfo(response);
					     console.log(response);
					     if(response.matches.length <1){
					     	alert('no recipes found');
					     }
					   }
					 });

			// or else you LEFT A FIELD BLANK, BRO
			} else {

				alert('you missed a field! check your fields again.');
				$('.results').empty();

			}
	};

/********************/


/* INJECT AND STYLE RESULTS */

	eatFeels.displayInfo=function(data){

	for(var i=0; i<data.matches.length; i++){
		$('.results').append('<a class="recipelink" href="http://www.yummly.com/recipe/'+ data.matches[i].id + '" target="_blank"><div class="box box' + i + '"></div></a>');
		$('.box' + i).append('<img src=' + data.matches[i].smallImageUrls[0].replace('=s90','') + '><p>' + data.matches[i].recipeName + '</p>');
		// $('.results').append('<p>' + data.matches[i].recipeName + '</p>');
		}
	};

/********************/

/* DOCUMENT READY */

	$(function() {
		console.log('script is running');
		// eatFeels.init();
		// on click of the button
		$('button').on('click', function(e) {
			e.preventDefault();
			$('#results').empty();
			$('#recipe').empty();
			eatFeels.init();
		});
	});

/********************/
