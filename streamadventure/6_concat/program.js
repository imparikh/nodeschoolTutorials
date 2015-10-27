/* We need to require the concat stream module*/
concat = require('concat-stream')

/* We pipe the input into our function*/
process.stdin.pipe(concat(function (body){
	/* The function takes the input and converts it to a string,
	reverses, and the joins it. This is then logged to the 
	console.*/
	console.log(body.toString().split('').reverse().join(''))
}))
