/* Requiring the necessary modules.*/
http = require('http')
map = require('through2-map')

/* Method to create the server */
server = http.createServer( function (request, response){
	/* This is how we check if the request is a post request */
	if(request.method != 'POST')
		return response.end('Not a post request!')
	
	/* Since the request is not a post request, we are piping
	it into a function. Let's take it slow here.
	This function (because of the map module) takes the data
	in request and makes it a string and then convert it 
	to upper case. We then pipe this new variable temp into 
	response. A more elegant way we could have done this would
	have been like:
	
	request.pipe(map (function (chunk){
		return chunk.toString().toUpperCase()
	})).pipe(response)

	*/
	temp = request.pipe(map (function (chunk){
		return chunk.toString().toUpperCase()
	}))
	temp.pipe(response)
})

server.listen(process.argv[2])