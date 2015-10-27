/* Requiring necessary modules */
http = require('http')
url = require('url')

/* Creating the server */
server = http.createServer( function (request, response){
	/* Using the function that comes with the module to 
	get the path of the location. It looks something like this:
	
	/api/unixtime?iso=2015-10-23T20:02:00.547Z

	*/
	location = url.parse(request.url, true).path;
	
	/* Since dates can be constructed by passing in a date code
	example: new Date(2015-10-23T20:02:00.547), so I isolated
	that part of the location string using substrings and created
	the date.*/
	date = new Date(location.substring(location.indexOf('=') + 1,
	 location.length - 1))
	/* Now I need to check if I need to return the unixtime or 
	not. */
	if (location.substring(5, 14) == 'parsetime'){
		/* We then use JSON.stringify() to convert everything
		to the JSON type.*/
		final = JSON.stringify({'hour': date.getHours(), 
			'minute': date.getMinutes(),
			 'second': date.getSeconds()})
	}
	else{
		/* We then use JSON.stringify() to convert everything
		to the JSON type.*/
		final = JSON.stringify({'unixtime': date.getTime()})
	}

	/* And now we pass everything back.*/
	response.end(final)
})

/* And we listen.. */
server.listen(process.argv[2])