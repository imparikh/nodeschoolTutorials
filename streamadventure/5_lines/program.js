/* Requiring the through2 module to allow us to transform
us to stream data and the split module to allow us to split
based on the line number.*/
through2 = require('through2')
split = require('split')

/* We start at the first line */
count = 1

stream = through2 (function write (buffer, encoding, next){
		/* We take the buffer and we make it a string */
		text = buffer.toString()
		/* If it is an odd line, we make it lowercase */
		if (count % 2 == 1)	
			this.push(text.toLowerCase() + '\n')
		else
			this.push(text.toUpperCase() + '\n')
		/* We move to the next line */
		count ++
		/* Next part of the input! */
		next()
	})

process.stdin
	/* This takes each part of what is inputted and feeds it
	through split. Split breaks it up by new lines.*/
	.pipe(split())
	/* Each new line is sent into stream to be made either
	upper case or lower case*/
	.pipe(stream)
	/* The entire thing is outputted. */
	.pipe(process.stdout)