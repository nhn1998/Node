// local module
const {add, a} = require("./local-1")
const {add:add2, a:a2} = require("./local-2")

// console.log(add2(2,3,5),a2);

// built in module

const path = require('path')
// console.log(path.parse('C:/Next Level/nodejs/Node/index.js'))
console.log(path.join('C:/Next Level/nodejs/Node/','local-1.js'))