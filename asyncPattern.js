//Async pattern

// ASYNC RUNS WHEN THE CODE IS READY WHILE SYNCRONIZE WORKS FROM TOP TO BOTTOM

const {readFile, writeFile} = require('fs')


// ANOTHER OPTION FOR ASYNC PATTERN
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

console.log(
    'THEM'
)

getText('./folder/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))

const start = async() => {
    try{
        const activate = await getText('./folder/first.txt')
        const activates = await getText('./folder/second.txt')
        console.log(activate, activates)
    }catch(err){
        console.log(err)
    }
} 

start()

console.log('ME')


// Option 2 OF USING FS ASYNC PATTERN
const util = require('util')
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const startAsync = async() => {
    try{
        const first = await readFilePromise('./folder/first.txt', 'utf8')
        const second = await readFilePromise('./folder/first.txt', 'utf8')
        await writeFilePromise('./folder/writeAsyncNewText.txt', `OMO HUNGER WAN KILL ME!!!!! ${first}, ${second}`)
        console.log("234",first, second)
    }catch(err){
        console.log(err)
    }
}

startAsync()

// THIRD OPTION 
// const {readFile, writeFile} = require('fs').promises