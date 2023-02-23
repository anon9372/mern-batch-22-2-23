const fetchData = (callback) => {
    setTimeout(() => {
        const data = { name: 'Anil', age: '33' }
        callback(data)
    }, 3000)
}


fetchData(function (data) {
    console.log(data)
})

console.log('Data is being fetched...')


// expected output: 
// "Data is being fetched..."
// [object Object] {
//   age: "33",
//   name: "Anil"
// }