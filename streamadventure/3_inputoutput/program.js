/* We have to require fs to use stdin */
fs = require('fs')

/* Don't overthink! */
process.stdin.pipe(process.stdout)