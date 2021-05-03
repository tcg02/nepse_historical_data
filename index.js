const {getIndexNames,getIndex} = require('nepse-data-module')

console.log(getIndexNames())

console.log(getIndex('Hydropower','2021-04-15','2021-04-30'));