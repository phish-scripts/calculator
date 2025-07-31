// DOM 
let display = document.getElementById("display");

// Numbers
let nine = document.getElementById("nine");
let eight = document.getElementById("eight");
let seven = document.getElementById("seven");
let six = document.getElementById("six");
let five = document.getElementById("five");
let four = document.getElementById("four");
let three = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one");
let zero = document.getElementById("zero");

// Operators
const adding = document.getElementById("add");
const subtracting = document.getElementById("subtract");
const multiplying = document.getElementById("multiply");
const dividing = document.getElementById("divide");

const clear = document.getElementById("clear");
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


// event listeners (numbers)

one.addEventListener("click", () => {
    display.textContent += "1";
})

two.addEventListener("click", () => {
    display.textContent += "2";
})

three.addEventListener("click", () => {
    display.textContent += "3";
})

four.addEventListener("click", () => {
    display.textContent += "4";
})

five.addEventListener("click", () => {
    display.textContent += "5"; 
})

six.addEventListener("click", () => {
    display.textContent += "6"; 
})

seven.addEventListener("click", () => {
    display.textContent += "7"; 
})

eight.addEventListener("click", () => {
    display.textContent += "8"; 
})

nine.addEventListener("click", () => {
    display.textContent += "9"; 
})

nine.addEventListener("click", () => {
    display.textContent += "9"; 
})

clear.addEventListener("click", () => {
    display.textContent = ""; 
})

















