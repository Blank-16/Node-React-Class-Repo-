
const fs = require('fs')

fs.readFile('./Node-js-class/fourthClass/data.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(`Error loading File: ${err}`)
        return;
    }

    const user = JSON.parse(data);
    console.log(`User name ${user.name}`)
    console.log(`User Age ${user.age}`)
    console.log(`user contact ${user.contact}`)
    console.log(`User address ${user.address}`)
})

