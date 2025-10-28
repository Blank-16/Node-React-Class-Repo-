
const fs = require('fs')

fs.readFile('basicCall.js', 'utf-8', (err, data) => {
    if (err) {
        console.log(`Error loading file: ${err}`)
    }
    else {
        console.log(`File Content: \n ${data}`)
    }
})