const Logger = require('./util-modules/logger')

const logger = new Logger();

logger.on('messageLogged', (e) => {
    console.log("messageLogged listener called => ", e)
})

logger.log('message')