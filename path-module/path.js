const path = require('path');

let pathObj = path.parse(__filename)
console.log(pathObj)
// => 
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\admin\\mastering-nodejs\\path-module',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
// }