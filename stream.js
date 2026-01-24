// STREAMS
/**
 * WRITEABLE
 * READABLE
 * DUPLEX
 * TRANSFORM
 * 
 * DIFFERENCE BETWEEN writeFILESYNC AND appendFileSync
 * writeFileSync = overwrite
 * appendFileSync = add to the end
 *     writeFileSync
 * Creates the file if it doesn’t exist
 * Overwrites the entire file if it does exist
 * Deletes old content and replaces it
 *   
 *   appendFileSync
 * Creates the file if it doesn’t exist
 * Keeps existing content
 * Writes at the end of the file
 * 
 *   STREAM
 * stream is used when we have a large file datas to write or read
 */
const {appendFileSync,  createReadStream, createWriteStream} = require('fs')

//appendFileSync can be  used to append large text in a file
// for(let i = 0; i < 1000; i++){
//     appendFileSync('./folder/write-stream-file.txt', `HELLO WORLD!!\n`)
// }

const stream = createWriteStream(
    './folder/create-new-file-for-stream.txt',
    { highWaterMark: 90000,
    encoding: 'utf8'
    }
)

// highWaterMark - control size
for(let i = 0; i < 1000; i++){
    stream.write('HELLO WORLD\n')
}
stream.write('HELLO WORLD\n')
stream.write('ANOTHER LINE\n')
// stream.writ
stream.end()

// stream.write('ANOTHER LINE\n')
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })