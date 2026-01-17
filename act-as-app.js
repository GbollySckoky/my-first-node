// __dirname === path to current directory
// __filename === file name
// require === function to use module. it also works like an import 
// module === info about current module
// process === info about env where the program is being executed

// --- MODULES ---
// CommonJS - Every file in node.js is a module (by default)
// Modules -  Encapsulated Code (only share minimum)
// to export a module or make it accessable you need to (module.export)
// module.exports is an object
// when declaring a function in module you do not need to add module.exports u can just invoke it e.g addValues()
const activate = require('./1-utils')
const values = require('./1-module')
const bigValues = require('./alternative-flow')
require('./1-utils')

// console.log(values)
activate(values.name)
activate(values.tutor)
activate(values.purpose)
console.log("ALternative", bigValues)
console.log(activate)