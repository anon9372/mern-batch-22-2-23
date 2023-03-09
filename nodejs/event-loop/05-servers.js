const http = require('http')

const server = http.createServer((req, res) => {

    console.log("Req Event")
    res.end("Hello World")
})

server.listen(3900, () => {
    console.log('Server is listening on port 3900')
})