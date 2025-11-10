
const fs = require('fs')

fs.readFile('./Node-js-class/fourthClass/data.json', 'utf-8', (err, data) => {
    if(err) {
        console.log(`Error reading file : ${err}`)
        return
    }

    let student = JSON.parse(data)
     
    student.city = "Barracks"
    student.prof = "Dok-ja"

    fs.writeFile('./Node-js-class/fourthClass/data.json' , JSON.stringify(student, null , 2), (err) => {
        if(err) {
            console.log(`Error: ${err}`)
        }
        else {
            console.log("success")
        }
    })
})