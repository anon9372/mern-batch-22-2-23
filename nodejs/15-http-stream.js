const http = require('http')
const fs = require('fs')

const stream = fs.createReadStream('./content/bigFile.txt', { highWaterMark: 90000 })

// http.createServer((req, res) => {

//     // const text = fs.readFileSync('./content/bigFile.txt', 'utf8')

//     // res.end(text)

//     const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf8')

//     fileStream.on('open', () => {
//         fileStream.pipe(res)
//     })

//     fileStream.on('error', (err) => {
//         res.end(err)
//     })




// }).listen(3900)

stream.on('data', (result) => { console.log(result) })



