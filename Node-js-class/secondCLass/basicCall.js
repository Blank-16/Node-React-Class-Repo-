
function greet(name , callback )
{
    console.log("Hello , "+ name);
    callback();
    
}

function sayGoodBye()
{
    console.log("GOODBYE ! ");
}
let a = 'as'
greet("Sunny" , sayGoodBye )