function subscribeEvents(){

	console.log( 'subscribeEvents() function called' );

	radio('ExampleEventPlay').subscribe( playMe );
	radio('ExampleEventStop').subscribe( stopMe );
	radio('ExampleEventHide').subscribe( hideMe );

}


function unsubscribeEvents(){

	console.log( 'unsubscribeEvents() function called' );

	radio('ExampleEventPlay').unsubscribe( playMe );
	radio('ExampleEventStop').unsubscribe( stopMe );
	radio('ExampleEventHide').unsubscribe( hideMe );

}

// Subscribed Events
function playMe(){

	console.log( 'PlayMe: function called from subscription' );
	alert( 'playMe: I\'ve Been callled by a radio call' );

}

function stopMe(){

	console.log( 'StopMe: function called from subscription' );
	alert( 'stopMe: I\'ve Been callled by a radio call' );

}

function hideMe(){

	console.log( 'HideMe: function called from subscription' );
	alert( 'hideMe: I\'ve Been callled by a radio call' );

}



// init Function
function init(){

	console.log( 'init() function called' );
	subscribeEvents();

	// Play
	var el = document.getElementById("play");
	if(el.addEventListener)
	{
	    el.addEventListener( "click", function(){
	    	radio('ExampleEventPlay').broadcast();
	    });
	}

	// Stop
	var el = document.getElementById("stop");
	if(el.addEventListener)
	{
	    el.addEventListener( "click", function(){
	    	radio('ExampleEventStop').broadcast();
	    });
	}

	// Hide
	var el = document.getElementById("hide");
	if(el.addEventListener)
	{
	    el.addEventListener( "click", function(){
	    	radio('ExampleEventHide').broadcast();
	    });
	}

	// Hide
	var el = document.getElementById("subscribe");
	if(el.addEventListener)
	{
	    el.addEventListener( "click", subscribeEvents );
	}

	// Hide
	var el = document.getElementById("unsubscribe");
	if(el.addEventListener)
	{
	    el.addEventListener( "click", unsubscribeEvents );
	}

}


// Self invoking function
(function(){

	console.log( 'Self invoking function calling init()' );
	init();

})();