const { readFile, writeFile } = require('fs')

console.log('Start the app')

readFile('./content/firstFile.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./content/secondFile.txt', 'utf8', (err, result) => {

        if (err) {
            console.log(err)
            return
        }

        const second = result

        writeFile('./content/new-write-async.txt', `This is a new file written asyncly`, (err, res) => {

            if (err) {
                console.log(err)
                return
            }
            console.log('Task Complete')
        })
    })




})

console.log('Starting next task')