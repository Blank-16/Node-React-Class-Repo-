
// even basics js
const EventEmitter = require('events')
const event = new EventEmitter();

event.on('greet', () => {
    console.log("Event Emitter")
})

// emit the event 

event.emit('greet');

event.on('greetings' , (name) => {
    console.log(`Hello, ${name}`)
})

event.emit('greetings', 'blank')
