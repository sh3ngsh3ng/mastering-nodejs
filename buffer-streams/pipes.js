const fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + "/junk.txt")
let myWriteStream = fs.createWriteStream(__dirname + "/writejunk.txt");

// myReadStream.on('data', (chunk) => {
//     console.log("new chunk received")
//     myWriteStream.write(chunk)
// })

// Pipes is like a "shortcut"
myReadStream.pipe(myWriteStream)