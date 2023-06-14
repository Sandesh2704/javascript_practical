// 2) Create a Node.js file that appends the existing file with a new
// content using the File System module.
let fs = require('fs')

fs.appendFile( 'file.txt','its for create new file', function(err){if(err) throw err; console.log('saved');})