
import { readFile, writeFile } from 'fs'

const data1 = JSON.parse(readFile('./Node-js-class/fourthClass/activity/products.json', 'utf-8'))
const data2 = JSON.parse(readFile('./Node-js-class/fourthClass/activity/students.json', 'utf-8'))

const mergeData = [...data1 , ...data2]

writeFile('./Node-js-class/fourthClass/activity/merged.json', JSON.stringify(mergeData, null , 2) , (err) => {
    if(err) console.log(`Error: ${err}`)
        else console.log(`Success`)
})