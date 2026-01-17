// BUILT IN MODULES 
// OPERTING SYSTEM
// FILE SYSTEM
// HTTP SERVER 
// PATH

/**
 * LETS START WITH OS**/
const os = require("os")

// info about the current user of the system
const user = os.userInfo()
console.log(user)

// uptime of the system
// const aboutUser = os.user()
console.log(`The system hostname is ${os.hostname()}`)

const currentOs = {
    name: os.type(),
    freeMemory: os.freemem(),
    type: os.type(),
    upTime: os.uptime(),
    version: os.version(),
    totalMemory: os.totalmem()
}

console.log(currentOs, "CurrentOs")