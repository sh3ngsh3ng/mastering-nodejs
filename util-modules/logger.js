const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(msg) {
        console.log(msg)
        // Raise an event
        this.emit('messageLogged', {msg: "event emitted"})
    }
}

module.exports = Logger

