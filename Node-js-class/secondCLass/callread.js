
const fs = require('fs')

fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err)
        console.log(`Error ${err}`)
    else
        console.log(`File Content: ${data}`)
})