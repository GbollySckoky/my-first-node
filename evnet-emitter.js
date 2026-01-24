// Event EMITTER

const eventEmitter =  require('events')

const customEventEmitter = new eventEmitter()

customEventEmitter.on('hey', () => {
    console.log('hello world')
})

customEventEmitter.on('hey', (name, action) => {
    console.log(`hello world ${name}, ${action}`)
})

customEventEmitter.emit('hey', 'Jaiye', 'Developer')