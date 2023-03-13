const http = require('http')

const server = http.createServer()


server.on('request', (req, res) => {
    res.end('WElcome')
})

server.listen(3900)