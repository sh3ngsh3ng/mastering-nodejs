const fs = require('fs')

// Synchronous method
const files = fs.readdirSync("./")
console.log(files)

// async, needs callback function
fs.readdir('./', function(err, files) {
    if (err) console.log('Error =>', err)
    else console.log('Result =>', files)
})

// async methods are preferred => nodejs only has a single thread







