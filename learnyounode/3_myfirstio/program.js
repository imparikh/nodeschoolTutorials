/* To get the filesystem module */
var fs = require('fs')
/* Now we have the full fs module availible*/

/* path contains the location of the file to be read */
path = process.argv[2]

/*readFileSync returns a Buffer object containing everything in 
our file*/
bufferObj = fs.readFileSync(path)
bufferAsString = bufferObj.toString()

/*This creates an array of everything separated by \n */
arr = bufferAsString.split('\n')

/* Our desired number would be one less than the length*/
console.log(arr.length - 1)
