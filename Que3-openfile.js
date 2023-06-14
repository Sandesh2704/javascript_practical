// 3) Create a Node.js file that opens an empty file using the File
// System module.
let fs = require('fs')

fs.open('Emptyfile.text', 'w', function(err){if(err) throw err; console.log('saved');})