/* Getting the path and extension */
path = process.argv[2]
ext = '.' + process.argv[3]

/* Requiring necessary modules. Highly suggest you check out
the path module */
fs = require('fs')
pathModule = require('path')

/* This function returns the list of all the files*/
fs.readdir(path, function (err, list){
	if (err)
		throw err
	for (i = 0;i < list.length; i ++){
		/* This if statement checks to see if it ends with the
		desired extension*/
		if (pathModule.extname(list[i]) == ext)
			console.log(list[i])
	}
})