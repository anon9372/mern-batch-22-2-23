const express = require('express')
const app = express()

const { products, people } = require('./data')


// app.get('/', (req, res) => {
//     res.send('<h1><a href="/api/v1/products/2">Get Product 2</a></h1>')
// })

// app.get('/api/v1/products', (req, res) => {

//     const newProducts = products.map((product) => {
//         const { id, name, image } = product
//         return { id, name, image }
//     })

//     res.status(200).json(newProducts)
//     res.send(products)

// })

// app.get('/api/v1/products/2', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 2)
//     res.status(200).json(singleProduct)

// })

//                      let productId = 
// app.get('/api/v1/products/:productId', (req, res) => {
//     // console.log(req.params)
//     const { productId } = req.params

//     const singleProduct = products.find((product) => product.id === Number(productId))
//     // console.log('singleProduct', singleProduct)


//     if (!singleProduct) {
//         return res.status(400).send('PRODUCT NOT FOUND!')
//     }
//     else {
//         res.status(200).json(singleProduct)
//     }

// })

app.get('/api/v1/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params)
    const { productId, reviewId } = req.params

})

app.listen(5800, () => {
    console.log('Server is running on port 5800')
})