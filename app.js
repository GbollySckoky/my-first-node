// BUILT IN MODULES 
// OPERTING SYSTEM
// FILE SYSTEM
// HTTP SERVER 
// PATH

// HTTP

const http = require('http')

const SERVER = http.createServer((req, res) => {
    console.log(req)
    if(req.url === '/'){
        res.end('yebo!!')
    }
    if(req.url === '/about'){
        res.end('Thank God!!')
    }
    res.end(
        `<h1>Oops!! </h1>`
    )  // if users is trying to access a file or route that doesn't exist this is the 404 paga or response
    // res.write('HELLO WORLD')
    // res.end()
})

SERVER.listen(4000)

// NPM
// PACKAGE.JSON 
// TO SWET UP MY PACKAGE.JSON I NEED TO RUN npm init or npm init -y
// NPM INSTALLS PACKAGES INTO NODE MODULES MEANING  NPM CREATES node_modules 