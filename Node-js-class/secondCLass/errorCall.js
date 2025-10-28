const getData = (callBack) => {
    let error = null;
    let data = `Sample Data`

    if (!data) {
        error = `No data found`
    }

    callBack(error, data);
}

getData((err, result) => {
    if (err) {
        console.log("Error: " + error)
    }
    else {
        console.log(`Result ${result}`)
    }
})