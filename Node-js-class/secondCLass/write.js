
const fs = require('fs')

fs.writeFile('text.txt', 'Hello node.js!', (err) => {
    if (err)
        console.log(`Error ${err}`)
    else
        console.log(`File written Succesfully`)
})