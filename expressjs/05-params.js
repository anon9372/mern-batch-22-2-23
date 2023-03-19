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

// app.get('/api/v1/products/:productId/reviews/:reviewId', (req, res) => {
//     console.log(req.params)
//     const { productId, reviewId } = req.params

//     const singleProduct = products.find((product) => product.id === Number(productId))
//     if (!singleProduct) {
//         return res.status(400).send('PRODUCT NOT FOUND!')
//     }
//     else {
//         console.log('dslkfjds', singleProduct.reviews)
//         const review = singleProduct.reviews.find((rev) => rev.id === Number(reviewId))
//         console.log('refvie', review)
//         if (!review) {
//             return res.status(400).send('Review Not Found')
//         }

//         else {

//             res.status(200).json(review)
//         }
//         // res.status(200).json(singleProduct) 
//     }

// })



app.get('/api/v1/products', (req, res) => {

    console.log('req', req.query)
    const { search, limit } = req.query

    let sortedData = [...products]

    if (search) {
        //d     //d === //a
        // [a, b, c, d].filter(item => item === search)
        sortedData = sortedData.filter((item) => {
            return item.name.startsWith(search)
        })
    }

    if (limit) {
        // [1,2,3,4].slice(0, 2)
        sortedData = sortedData.slice(0, Number(limit))
    }

    if (sortedData.length < 1) {
        return res.status(200).json({ success: true, data: [] })
    }


    res.status(200).json(sortedData)


})















app.listen(5800, () => {
    console.log('Server is running on port 5800')
})