const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request',(req,res)=>{
    if(req.url === '/file-read' && req.method === "GET");
    const readableStream = fs.createReadStream(process.cwd() + './readText/read.txt')

    readableStream.on('data',(buffer)=>{
        res.write(buffer)
    })
    readableStream.on('end',()=>{

        res.end('Hello World!')
    })
})

server.listen(5000,()=>{
    console.log("Listening on port 5000")
})