const http = require('http')
const fs = require('fs')
// const SERVER = http.createServer((req, res) => {
//     console.log(req)
//     if(req.url === '/'){
//         res.end('yebo!!')
//     }
//     if(req.url === '/about'){
//         res.end('Thank God!!')
//     }
//     res.end(
//         `<h1>Oops!! </h1>`
//     )  // if users is trying to access a file or route that doesn't exist this is the 404 paga or response
//     // res.write('HELLO WORLD')
//     // res.end()
//     SERVER.on("hello", (req, res) => {
//         res.end('yeiii')
//     })
// })

// event emit api
// const SERVER = http.createServer((req, res) => {
//     SERVER.on("hello", (req, res) => {
//         res.end('yeiii')
//     })
// })

// SERVER.emit('hello')
// SERVER.listen(4000)

const server = http.createServer((res, req) => {
  const writeStream = fs.createWriteStream('./folder/create-http-stream-file', {
        highWaterMark: 9000,
        encoding: 'utf8'
    })

     // pipe request data into the file
  req.pipe(writeStream)

  res.end('File saved!\n')
})

// for(i = 0; 1 < 1000; i++){
//     server.write('HHello WORLD!!\n')
// }

server.listen(5000)