const os = require('os')
const utilFunctions = require('../util-modules/functions');

let totalMemory = utilFunctions.bytesToSize(os.totalmem());
let freeMemory = utilFunctions.bytesToSize(os.freemem());
console.log(totalMemory, freeMemory)