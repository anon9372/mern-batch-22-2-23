const http = require('http')
const port = 5500

// console.log('http', http) 

// create the server
const server = http.createServer((req, res) => {
    // res.write('Hello we just created a server')
    // res.end()

    if (req.url === '/') {
        // res.write('This is Home page') 
        res.end('This is Home page')
    }

    else if (req.url === '/about') {
        // res.write('This is about page') 
        res.end('This is about page')
    }

    else {
        res.end(`
        <h1>Opps content not found! </h1>
        <a href='/'>Back to Home </a>
        `)
    }

})


// start the server
server.listen(port, () => {
    console.log(`Sever is running on port ${port}`)
})