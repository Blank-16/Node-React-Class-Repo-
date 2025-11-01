
const fs = require('fs')

fs.rename('text.txt', 'rename.txt', (err) => {
    if (err) console.log(`Err : ${err}`)
    else console.log("Done")
})