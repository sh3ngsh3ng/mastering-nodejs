const fs = require('fs')

fs.unlink('writefile1.txt', (err) => {
    if(err) throw err
    console.log("File deleted")
})