// 4) Create a Node.js file that writes the file using the File System
// module

let fs = require('fs')

fs.writeFile('Emptyfile.text', 'this section for write text in txt file', function(err){if(err) throw err; console.log('saved');})