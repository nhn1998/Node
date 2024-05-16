const EventEmitter = require("events")

const myEmmiter = new EventEmitter()

myEmmiter.on('Birthday',()=>{
    console.log("Happy birthday")
})

myEmmiter.on("Birthday",()=>{
    console.log("Gift time")
})

myEmmiter.emit('Birthday')