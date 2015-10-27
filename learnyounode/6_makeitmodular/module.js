/* Requiring necessary modules. Highly suggest you check out
the path module */
fs = require('fs')
pathModule = require('path')

/* The function our module will use. The function that is set
equals to module.exports can be called with myModule in the 
main program. The way I like to think about the callback is 
that it happens after the rest of the function when we have
that line of code "callback(null, data)". That's how we 
communicate with the main program.*/
module.exports = function (path, extension, callback){

	/* We still want to use the readdir function, the whole
	point of this program was to put it in another file.ß*/
	fs.readdir(path, function (err, list){
		if (err)
			return  callback(err)
		extension = '.' + extension
		data = []
		for (i = 0;i < list.length; i ++){
			/* This if statement checks to see if it ends with the
			desired extension*/
			if (pathModule.extname(list[i]) == extension)
				data.push(list[i])
		}

		/* We have to communicate with the callback of our 
		main program. */
		callback(null, data)
	})
}