const http = require('http')
const { readFileSync } = require('fs')

const hompage = readFileSync('./navbar-app/index.html')
const styles = readFileSync('./navbar-app/styles.css')
const logic = readFileSync('./navbar-app/browser-app.js')
const logo = readFileSync('./navbar-app/logo-white.png')

// Creating a server
const server = http.createServer((req, res) => {

    const url = req.url

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(hompage)
        res.end()
    }

    if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.write('<h1>This is about page</h1>')
        res.end()
    }

    if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(styles)
        res.end()
    }

    if (url === '/logo-white.png') {
        res.writeHead(200, { 'content-type': 'text/png' })
        res.write(logo)
        res.end()
    }

    if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(logic)
        res.end()
    }
})


// Starting a server
server.listen(5600)

