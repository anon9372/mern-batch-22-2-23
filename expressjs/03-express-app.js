const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./navbar-app'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.all('*', (req, res) => {
    res.status(404).send('Resours Not found!!!')
})


app.listen(5800, () => {
    console.log('Server is on 5800....')
})