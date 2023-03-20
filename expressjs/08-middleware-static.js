const express = require('express')
// const authorize = require('./my-middleware/authorize') 
const app = express()

let { people } = require('./data')
app.use(express.static('./navbar-app'))


app.get('/api/peope', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.listen(9000, () => {
    console.log('The server is running on port 9000...')
})