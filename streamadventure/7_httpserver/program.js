http = require('http')
fs = require('fs')
through2 = require('through2')

server = http.createServer(function (req, res){
	if (req.method == 'POST'){
		req.pipe(through2(function write(buffer){
			this.queue(buffer.toString().toUpperCase());
		},
		function end (done){
			done()
		}))
	}})

server.listen(process.argv[2])