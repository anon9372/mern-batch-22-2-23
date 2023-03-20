const express = require('express')
// const authorize = require('./my-middleware/authorize') 
const app = express()

const logger = require('./my-middleware/logger')
const authorize = require('./my-middleware/authorize')

app.use([authorize, logger])

// app.get('/', (req, res) => {
//     res.send('Home')
// })

// app.get('/about', (req, res) => {
//     res.send('About')
// })

app.get('/api/profile', (req, res) => {
    console.log(req.user)
    res.send('Profile')
})

// app.get('/api/profile', [authorize, logger], (req, res) => {
//     console.log(req.user)
//     res.send('Profile')
// })






app.listen(9000, () => {
    console.log('The server is running on port 9000...')
})