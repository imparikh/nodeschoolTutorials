/* Getting the file name */
file = process.argv[2]

/*Requiring the needed module */
fs = require('fs')

/* We create the read stream to process.stdout*/
fs.createReadStream(file).pipe(process.stdout)