const fs = require('fs')

// WRITING A FILE
//synchronous
const readFile = fs.readFileSync('readfile.txt', 'utf8')
fs.writeFileSync('writefile1.txt', readFile)
// asynchronous
fs.readFile('readfile.txt', 'utf-8', (err, data) => {
    console.log(err, data)
    fs.writeFile('writefile2.txt', data, () => console.log('file created'))
})