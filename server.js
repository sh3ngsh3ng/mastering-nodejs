const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let myReadStream = fs.createReadStream(__dirname + '/junk.txt')
    myReadStream.pipe(res)
    myReadStream.on('end', () => {
        console.log("data sent completely")
    })
})

server.listen(3000)
console.log("Server is live...")