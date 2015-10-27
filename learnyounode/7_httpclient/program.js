/* Setting up the var url and requiring the http module*/
url = process.argv[2]
http = require('http')
bl = require('bl')


/* Using the get function that has a callback that returns
a Stream. We then use the setEncoding to make sure it is
readable, and then we just output it with the on() 
function.*/
http.get(url, function(response){
	response.setEncoding('utf8')
	/*The "data" in quotes is treated like an error in a
	callback. On is the way we access the response.*/
	response.on("data", function(data){
		console.log(data)
	})
})
