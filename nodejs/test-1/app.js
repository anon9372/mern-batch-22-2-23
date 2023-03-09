// const CityFunction = require('./cityFunction')
// const { city1, city2, city3 } = require('./city')


// CityFunction(city1)
// CityFunction(city2)
// CityFunction(city3)

// const { writeFileSync, readFileSync } = require('fs')

// writeFileSync('./dummy.txt', 'FIle is created using FS module')

// const newReadFile = readFileSync('./test-1.txt', 'utf8') 

// console.log(newReadFile) 


// import http
const http = require('http')


// create server
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('This is home page')
        res.end()
    }

    if (req.url === '/about') {
        res.write('This is NEW ABOUT page')
        res.end()
    }

    if (req.url === '/home') {
        res.write('This is New Home page')
        res.end()
    }

})


// listen 

server.listen(3800, () => {
    console.log('Server is running on port 3800...')
})
