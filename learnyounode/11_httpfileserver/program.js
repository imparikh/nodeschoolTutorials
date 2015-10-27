/* Requiring the necessry modules and setting up the path 
variable. */
http = require('http')
fs = require('fs')
path = process.argv[3]

/* We create the server using the html module*/
server = http.createServer( function (request, response){
	/* We literally pipe the file contents into the 
	response variable*/
	fs.createReadStream(path).pipe(response)
})

/* When we listen, we can get the response given from the 
above code.*/
server.listen(process.argv[2])