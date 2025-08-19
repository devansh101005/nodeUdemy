//in order to make a server use a built in module 

const http =require('http')

const server =http.createServer(function(req,res){
console.log("Got an incomig requst")
//db response yahan hoga 
res.writeHead(200)
res.end('Thanks for visiting my server')
})

server.listen(8000,function() {
    console.log(`HTTP server is running on 8000`)
})