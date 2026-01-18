// FILE SYSTEM
// WRITEFILESYNC CAN WRITE or create A NEW FILE 
// READFILESYNC READS A FILE
// SYNC AND ASYNC

// NOTE: USE CAN'T 
// FS SYNC RUNS LINE BY LINE
// FS ASYNC RUNS DOES NOT RUN LINE BY LINE IT RENDERS THE AVAILABLE CODE OR RESPONSE 
// ASYNC
const {readFile, writeFile} = require('fs')
console.log("Them")
readFile('./folder/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    const first = result
    console.log(first)
readFile('./folder/second.txt', "utf8", (error, result) => {
    if(error){
        console.log(error)
        return;
    }
    const second = result
    writeFile(
        './folder/writeAsyncNewText.txt',
        `Okay oo ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return;
            }
            console.log("Blessed")
        }
    )
})
})
console.log('testing...')