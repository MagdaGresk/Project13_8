var http = require('http')
var server = http.createServer()
var fs = require('fs')

server.on('request', function (request, response) {
	if (request.method === 'GET' && request.url === '/hello') {
		fs.readFile('./index.html', function(err, data) {
		    response.writeHead(200, {'Content-Type': 'text/html'})
		    response.write(data)
		    response.end()
		})
	} else {
		fs.readFile('./cat.jpg', function(err, data) {
			response.writeHead(404, {'Content-Type': 'image/jpg'})
			response.write(data)
		    response.end()
		})
	}
})

server.listen(9000)
console.log('Listening started')
