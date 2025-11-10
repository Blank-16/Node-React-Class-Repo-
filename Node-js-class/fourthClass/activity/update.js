const fs = require('fs')

const product = {
    "name": "imax",
    "brand": "bmak",
}

fs.writeFile("./Node-js-class/fourthClass/activity/products.json", JSON.stringify(product, null, 2), (err) => {
    if (err) {
        console.log(`err: ${err}`)
        return
    }

    else {
        console.log("Success")
    }
})


// for students 

fs.readFile("./Node-js-class/fourthClass/activity/students.json", "utf-8", (err, data) => {
    if (err) console.log(`Error ${err}`)

    let studentData = JSON.parse(data)
    studentData.marks += 5;
    fs.writeFile("./Node-js-class/fourthClass/activity/students.json", JSON.stringify(studentData, null, 2), (err) => {
        if (err) console.log(`Err: ${err}`)
    })
})