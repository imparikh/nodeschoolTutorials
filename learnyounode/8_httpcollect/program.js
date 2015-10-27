/* Setting up the var url and requiring the http and bl 
modules*/
url = process.argv[2]
http = require('http')
bl = require('bl')

/* Using the get function that has a callback that returns
a Stream. We then use the setEncoding to make sure it is
readable, and then we just output it with the on() 
function.*/
http.get(url, function(response){
	response.setEncoding('utf8')
	/*The pipe function "pipes" in the response and bl 
	coverts it to a buffer. We can just use toString and the
	rest is simple!*/
	response.pipe(bl(function(err, data){
		console.log(data.toString().length)
		console.log(data.toString())
	}))
})
