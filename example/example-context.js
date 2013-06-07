function subscribeEvents(){

	console.log( 'subscribeEvents() function called' );

	radio('changeTabEvent').subscribe([myApp.init, myApp]).broadcast();


}


function unsubscribeEvents(){

	console.log( 'unsubscribeEvents() function called' );

	radio('changeTabEvent').unsubscribe([myApp.init, myApp]).broadcast();

}

// Subscribed Events
var myApp = {
	init: function() {
		this.run();
	},
	run: function() {
		//do something
		alert( 'run' );
	}
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
	    	radio('changeTabEvent').broadcast();
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