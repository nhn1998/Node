const fs = require('fs');

fs.readFile('./readText/read.txt','utf-8',(err,data)=>{
    if(err){
        throw error('Cannot read file ')
    }else{
        console.log(data)
    }
    // write file async

    fs.writeFile('read2.txt',data,'utf-8',(err)=>{
        if(err){
            console.log(err)
        }
    })
})