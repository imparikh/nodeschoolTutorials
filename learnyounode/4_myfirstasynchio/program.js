/* To get the filesystem module */
var fs = require('fs')
/* Now we have the full fs module availible*/

/* path contains the location of the file to be read */
path = process.argv[2]

/*readFile ASYNCRONOUSLY returns a Buffer object containing everything in 
our file*/
fs.readFile(path, function (err, data){
	if (err)
		return err
	else
		console.log(data.toString().split('\n').length - 1)
})

