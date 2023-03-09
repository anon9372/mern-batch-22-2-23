const _ = require('lodash')

const items = [1, [2, [3, [4, [5]]]]]

const newItems = _.flattenDeep(items)


let a = { name: 'Anil' }

console.log(_.isEmpty(a))

console.log('newItems', newItems)