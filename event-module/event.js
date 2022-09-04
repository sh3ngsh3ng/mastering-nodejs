const EventEmitter = require('events');
// EventEmitter is a class

const emitter = new EventEmitter();

// Register a eventlistener
emitter.on('listener-one', () => {
    console.log("This is listener-one")
})

emitter.addListener('listener-two', (e) => {
    console.log("This is listener-two with data => ", e)
})

// Emitting an event
emitter.emit('listener-one')

emitter.emit('listener-two', {id: 1, msg: "Hello World"})



