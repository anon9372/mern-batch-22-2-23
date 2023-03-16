const express = require('express')
const app = express()

const { products, people } = require('./data')


app.get('/products', (req, res) => {
    res.status(201)
    res.json(products)
    console.log(products)
})


app.listen(5800, () => {
    console.log('Server is running on port 5800')
})