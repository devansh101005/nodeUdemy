const http =require('node:http')

const server=http.createServer(function(req,res){
console.log(`Incoming request at [${Date.now()}]`)
console.log(req.url)

//



res.writeHead(200)
res.end("Ok")
})

server.listen(8000,() => console.log(`Server is running on port :8000`))

