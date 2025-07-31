// DOM 
let display = document.getElementById("display");

// Numbers
let seven = document.getElementById("seven");
let six = document.getElementById("six");
let five = document.getElementById("five");
let four = document.getElementsById("four");
let three = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one")
let zero = document.getElementById("zero");

// Operators
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const clear = document.getElementById("divide");
const equals = document.getElementById("equals");








// Operations
function add(a, b)
{   
    console.log(a + b);
    return a+b;
}

function sub(a, b)
{
    console.log(a-b);
    return a-b;
}

function mult(a, b)
{
    console.log(a*b);
    return a*b;
}

function divide(a, b)
{
    console.log(a/b);
    return a/b;
}

function operate(operator, a, b)
{
    if (operator == "+")
    {
        console.log("adding " + a + " and " + b)
        return add(a,b)
    }
    else if (operator == "-")
    {
        console.log("subtracting " + a + " and " + b)
        return sub(a,b)
    }
    else if (operator == "*")
    {
        console.log("multiplying " + a + " and " + b)
        return mult(a,b)
    }
    else if (operator == "/")
    {
        console.log("dividing " + a + " and " + b)
        return divide(a, b)
    }
}

// test
operate("-", 5, 3)









