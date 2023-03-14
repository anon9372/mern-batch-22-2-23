const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('This is homepage')
})

app.get('/about', (req, res) => {
    res.status(200).send('This is About Page!')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found..</h1>')
})


app.listen(5800, () => {
    console.log('The server is running on port 5800...')
})

