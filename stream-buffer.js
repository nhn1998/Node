const http = require('http')
const fs= require('fs')
const { buffer } = require('stream/consumers')

const server = http.createServer()

server.on('request',(req,res)=>{
    if(req.url === '/read-file' && req.method === "GET");
    const readableFile = fs.createReadStream(process.cwd() + '/readText/read.txt')
    readableFile.on('data',(buffer)=>{
        res.write(buffer)
    })
    readableFile.on('end',()=>{

        res.end('Hello world')
    })
})

server.listen(5000,()=>{
    console.log("Server is running at port 5000")
})