/* Requiring the through2 module to allow us to transform
us to stream data.*/
through2 = require('through2')

/* through2 has two functions: write and end.
Write pushes what is inputted to the stream, and then 
goes to the next object to add to the stream with next().
End just ends the entire thing.*/
stream = through2(function write (buffer, encoding, next){
	this.push(buffer.toString().toUpperCase())
	next()
}, 
/* We can remove the following function because it's 
optional*/
function end (done){
	done()
})

/* THe input is piped into stream (which is actually 
	a function), which runs it through the function 
to convert it to string and then upper case*/
process.stdin.pipe(stream).pipe(process.stdout)

