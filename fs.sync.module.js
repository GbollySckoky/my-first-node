// FILE SYSTEM
// WRITEFILESYNC CAN WRITE or create A NEW FILE 
// READFILESYNC READS A FILE
// SYNC AND ASYNC

// NOTE: USE CAN'T 
// FS SYNC RUNS LINE BY LINE
// FS ASYNC RUNS DOES NOT RUN LINE BY LINE IT RENDERS THE AVAILABLE CODE OR RESPONSE 

// sync
const {readFileSync, writeFileSync} = require('fs')

console.log("Hello")
const readFile = readFileSync('../tutorial/folder/first.txt', "utf8")
const readFile2 = readFileSync('../tutorial/folder/second.txt', "utf8")
console.log("YOOO", readFile, readFile2)
// console.log(filePath1, filePath2)

writeFileSync('./folder/writeNewText.txt',
`What do you plan to write: ${readFile}, ${readFile2}`,
{flag: 'a'} // flag is used to create a new line or u can duplicate it
)

console.log("HEY")


