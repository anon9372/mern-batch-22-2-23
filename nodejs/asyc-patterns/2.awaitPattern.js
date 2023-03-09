const { readFile } = require('fs')


const getText = (path) => {
    return new Promise((res, rej) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                console.log(data)
                res(data)
            }
        })
    })
}

const start = async () => {
    try {
        await getText('../content/firstFile.txt')
    }
    catch (err) {
        console.log(err)
    }
}

start()


