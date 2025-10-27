console.log("Hello from chalk")

const student = {
    name: "Monika",
    subject: "Node js Basics",
    motto: "Have fun learning NODE",
}

console.log(student)

const add = (a , b) => {
    return a + b;
}

console.log(add(132, 23))

const oddEven = (num)  => {
    if (num % 2 === 0)
    {
        return "Even";
    }
    else if (num % 2 != 0) 
    {
        return "Odd";
    }
    else {
        return "wrong input";
    }
}

