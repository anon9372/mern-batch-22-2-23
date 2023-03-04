const os = require('os')

// information about the system user
const user = os.userInfo()
console.log('user', user)

// info about the system uptim
console.log(`Uptime of the system is ${os.uptime()}`)

const myOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log('this is os module', myOS)

