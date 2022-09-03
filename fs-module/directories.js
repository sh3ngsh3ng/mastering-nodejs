const fs = require('fs')

// CREATING DIRECTORIES
// synchronous
fs.mkdirSync('createdDir1')
// async
fs.mkdir('createdDir2', () => {
    fs.readFile('readfile.txt', 'utf-8', (err, data) => {
        fs.writeFile('./createdDir2/writefile3.txt', data, () => console.log("writefile3.txt created"))
    })
})







// DELETING DIRECTORIES
// directories can only be removed if empty
// synchronous
fs.rmdirSync('createdDir1')
// async
fs.unlink('./createdDir2/writefile3.txt', () => {
    fs.rmdir('createdDir2', () => console.log("createdDir2 removed"))
})




