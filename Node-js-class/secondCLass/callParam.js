
const calculate = (a, b, callback) => {
    let result = a + b;
    callback(result);
}

calculate(5, 10 , (sum) => {
    console.log(`The sum is : ${sum}`)
})