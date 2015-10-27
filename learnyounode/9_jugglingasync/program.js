/* Setting up the url array and requiring the http and bl 
modules*/
url = [process.argv[2], process.argv[3], process.argv[4]]
http = require('http')
bl = require('bl')

/* We need a counter variable to keep track of how many times
we have gotten the data.*/
count = 0

/* The results array keeps track of the huge strings that
are going to be what we output.*/
results = []

for (i = 0; i < 3; i++){
	doHTTP(i)
}

/* This function takes "i", an index to draw from in the 
url array. It then converts it to string and puts it in the
results array.*/
function doHTTP (i){
	http.get(url[i], function(response){
		response.setEncoding('utf8')
		response.pipe(bl(function(err, data){
			if (err)
				throw err
			results[i] = data.toString()
			/* We need to use a counter variable instead of 
			keeping track of i because we only want the if
			statement to execute AFTER we have got the last 
			string. This can only happen if the line directly
			above it tells it when to do so. */
			count ++
			/* When we have inserted our third one, the 
			functon printMe() executes.*/
			if (count == 3)
				printMe()
		}))
	})
}

/* Sure we could have done this with a for loop ;) */
function printMe(){
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}