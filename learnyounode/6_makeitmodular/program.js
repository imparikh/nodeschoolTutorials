/* Getting the path and extension */
path = process.argv[2]
ext = process.argv[3]

/* Requiring necessary module */
fs = require('fs')

/* Requiring the module we create */
mymodule = require('./module.js')

/* Calling the function in the module */
mymodule(path, ext, function (err, data){
	if (err)
		return err
	/* We have data because of the "callback(null, data) 
	line in the module file.*/
	for (i = 0; i < data.length; i ++)
		console.log(data[i])
})