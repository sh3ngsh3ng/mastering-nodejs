const fs = require('fs')

// LIST FILES IN DIRECTORIES
// synchronous
const files = fs.readdirSync("./")
console.log(files)
// asynchronous
fs.readdir('./', function(err, files) {
    if (err) console.log('Error =>', err)
    else console.log('Result =>', files)
})

// READING A FILE
// files are read in binary
// synchronous
const readFile = fs.readFileSync('readfile.txt', 'utf8')
console.log(readFile)
// asynchronous
fs.readFile('readfile.txt', 'utf-8', (err, data) => {
    console.log(err, data)
})






