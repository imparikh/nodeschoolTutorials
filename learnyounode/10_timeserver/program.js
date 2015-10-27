/* We need the net module to be able to create the server*/
net = require('net')

/* Using createServer, we can create an instance of our server.
Note that we did not have to do whole thing with the date in 
here. We could have put all of the date creation in a funciton
that would have been called inside of socket.end(FUNCTION).
This basically creates a date, and writes it to the server
using socket.end(thingToWrite).*/
var server = net.createServer(function (socket){
	date = new Date()
	data = date.getFullYear() + '-' 
		+ padder(date.getMonth() + 1) + '-'
		+ padder(date.getDate()) + ' '
		+ padder(date.getHours()) + ':'
		+ padder(date.getMinutes()) + '\n'
	socket.end(data)
})

/* Because some of the days, months, hours, etc could be single
digits, this makes sure there are always two digits.*/
function padder(singleDigit){
	if (String(singleDigit).length == 1)	
		return '0' + String(singleDigit)
	else
		return String(singleDigit)
}

/* This connects the server that we have created to that 
specific host. */
server.listen(process.argv[2])