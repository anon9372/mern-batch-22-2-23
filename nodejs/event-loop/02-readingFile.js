const { readFile, writeFile } = require('fs')

console.log('This is 1st task')

readFile('../content/firstFile.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
    }

    console.log(result)
    console.log('Taask 1 completed')
})

console.log('Starting next task')