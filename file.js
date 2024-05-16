const fs = require('fs')

const readSystem = fs.readFileSync('./readText/read.txt','UTF-8')
// console.log(readSystem)

const WritingSystem = fs.writeFileSync('./readText/write.txt', readSystem + 'hi this is nayeem here')