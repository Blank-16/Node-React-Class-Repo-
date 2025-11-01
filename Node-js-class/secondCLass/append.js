
const fs = require('fs')

fs.appendFile('text.txt', '\nThis line was appended later via append', (err) => {
    if (err) console.log("Error appending file: ", err)
    else console.log("Data appended succesfully")
})