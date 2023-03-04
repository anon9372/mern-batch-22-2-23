const { readFileSync, writeFileSync } = require('fs')

console.log('Start the application')

const firstFile = readFileSync('./content/firstFile.txt', 'utf8')
const secondFile = readFileSync('./content/secondFile.txt', 'utf8')

console.log(firstFile, secondFile)

writeFileSync('./content/first-write-file-sync.txt', `T have read ${firstFile} and ${secondFile} and writte a new file in a new path`)

console.log('Task is completed')

console.log('Start next task')