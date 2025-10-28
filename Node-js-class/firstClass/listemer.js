
const { log } = require('console');
const eventEmitter = require('events')
const event = new eventEmitter();

const showMessage = () => log('Event Triggered')
event.on('remove', showMessage)

event.emit('remove')

event.removeListener('remove', showMessage)
event.emit('remove')


// using start will only make the event emit once and not more

event.once('startOnce', () => {
    log("This event only takes place once! ")
})

