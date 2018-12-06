let fs = require('fs')

let http = require('http')
// let url = require('url')

let server = http.createServer()

server.on('request', (request, response) => {
    // response.writeHead(200)
    // let query = url.parse(request.url, true).query
    // response.end('Bonjour ' + query.name)
     
 fs.readFile('index.html', (err,data) => {
     if (err) {
       response.writeHead(404)  
       response.end('Ce fichier n\'existe pas')
     } else {
       
     response.writeHead(200, {
        'Content-type': 'text/html; charser=utf-8'
    }) 
 response.end(data)    
     }

     response.writeHead(200, {
        'Content-type': 'text/html; charser=utf-8'
    }) 
 response.end(data)  
 })

})
server.listen(8080)