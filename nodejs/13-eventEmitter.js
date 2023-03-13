const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// console.log(customEmitter) 

customEmitter.on('response', (name) => {
    console.log(`Hello Im triggered, ${name}`)
})

customEmitter.on('response', () => {
    console.log('Hello Im triggered 2')
})

customEmitter.on('response', () => {
    console.log('Hello Im triggered 3')
})

customEmitter.emit('response', 'AchiversIT')