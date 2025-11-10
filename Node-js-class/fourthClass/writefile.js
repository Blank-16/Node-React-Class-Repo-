
const fs = require('fs')

const student = {
    "name": "blank",
    "age": 21,
    "city": "Asansol",
    "contact": 1234,
    "address": "WB"
}

const jsonData = JSON.stringify(student, null, 2)
fs.writeFile('/Node-js-class/fourthClass/data.json', jsonData, (err) => {
    if (err) console.log("error ", err)
    else {
        console.log("Success")
    }
})