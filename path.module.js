// PATH
// PATH
const path = require('path')

console.log(path.sep)

const filePath = path.resolve(__dirname, '/folder',"path","path.txt")
const file = path.join('/folder',"path","path.txt") // JOIN ADDS THE FOLDER TOGETHER
console.log(filePath)
console.log(file)

const base = path.basename(file) //BASENAME GRABS THE FILE
console.log(base)