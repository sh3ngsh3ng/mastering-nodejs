# Streams & Buffer

## Buffers
- Temporary storage spot for a chunk of data that is being transferred from one place to another
- The buffer is filled with data and then passed along
- Transfer small chunks of data at a time

## Streams
- Stream of data that flows overtime from one place to another
- Types of streams:
    - Writable streams - allow nodejs to write data to a stream
    - Readable streams - allow nodejs to read data from a stream
    - Duplex streams - can read and write to a stream. E.g. TCP socket.
    - Transform streams - a duplex streams that ca nbe used to modify or transofrm data as it is written and read
- Nodejs can create streams in nodejs to transfer data, together with buffer, it increases performance

## Pipes
- As it is very common to have a read stream sending data to a write stream, pipes is a "shortcut" you can use for this common process.
- You can pipe data to a response as well:
```
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let myReadStream = fs.createReadStream(__dirname + 'junk.txt')
    myReadStream.pipe(res)
})
```