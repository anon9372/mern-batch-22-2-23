const http = require('http')
const { join } = require('path')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Home Page')
    }

    if (req.url === '/products') {

        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('ERROR')

        // res.end('This is products page')
    }

})

server.listen(3900, () => {
    console.log('Server is listening on port 3900')
})
