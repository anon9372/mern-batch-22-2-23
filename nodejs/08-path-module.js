const path = require('path')

// console.log(path) 

// create a path
const myFilesPath = path.join('/content', 'subfolder', 'demo.txt')
console.log('myFilesPath', myFilesPath)

// access the name of the file
const baseName = path.basename(myFilesPath)
console.log('baseNmae', baseName)

// absolute path for a file
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'demo.txt')
console.log(absolutePath)