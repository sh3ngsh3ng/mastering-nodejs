const fs = require('fs');


let myReadStream = fs.createReadStream(__dirname + "/junk.txt")

myReadStream.on('data', (chunk) => {
    console.log('new chunk received')
    process.stdout.write(chunk)
})