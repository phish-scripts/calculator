// DOM 
console.log("We are ready to go. Also, if you are looking at the console, please feel free to code review");
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

function operate(a, operator, b)
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
    else{
        console.log("Somehow, no valid operator was entered");
    }
}

// event listeners (numbers)
one.addEventListener("click", () => {
    display.textContent += "1";
    console.log("Entered 1");
})

two.addEventListener("click", () => {
    display.textContent += "2";
    console.log("Entered 2");
})

three.addEventListener("click", () => {
    display.textContent += "3";
    console.log("Entered 3");
})

four.addEventListener("click", () => {
    display.textContent += "4";
    console.log("Entered 4");
})

five.addEventListener("click", () => {
    display.textContent += "4";
    console.log("Entered 5");
})

six.addEventListener("click", () => {
    display.textContent += "6"; 
    console.log("Entered 6");
})

seven.addEventListener("click", () => {
    display.textContent += "7"; 
    console.log("Entered 7");
})

eight.addEventListener("click", () => {
    display.textContent += "8"; 
    console.log("Entered 8");
})

nine.addEventListener("click", () => {
    display.textContent += "9"; 
    console.log("Entered 9");
})

zero.addEventListener("click", () => {
    display.textContent += "0";
    console.log("Entered 0"); 
})

clear.addEventListener("click", () => {
    display.textContent = ""; 
    console.log("Hit Clear");
})


// Event Listeners (Operators)

let operation = [];

adding.addEventListener("click", () => {
    
    operation.push(display.textContent);
    display.textContent = "";
    operation.push("+");

    if (operation.length >= 3)
    {
        let a = parseFloat(operation[0]);
        let operator = operation[1];
        let b = parseFloat(operation[2]);

        let result = operate(a, operator, b);

        display.textContent = result;

        operation = [result, "+"];


    }
})

subtracting.addEventListener("click", () => {
    operation.push(display.textContent);
    display.textContent = "";
    operation.push("-");


    if (operation.length >= 3)
    {
        let a = parseFloat(operation[0]);
        let operator = operation[1];
        let b = parseFloat(operation[2]);

        let result = operate(a, operator, b);

        display.textContent = result;

        operation = [result, "-"];


    }
})

multiplying.addEventListener("click", () => {
    operation.push(display.textContent);
    display.textContent = "";
    operation.push("*");

    if (operation.length >= 3)
    {
        let a = parseFloat(operation[0]);
        let operator = operation[1];
        let b = parseFloat(operation[2]);

        let result = operate(a, operator, b);

        display.textContent = result;

        operation = [result, "*"];


    }
})

dividing.addEventListener("click", () => {
    operation.push(display.textContent);
    display.textContent = "";
    operation.push("/");


    if (operation.length >= 3)
    {
        let a = parseFloat(operation[0]);
        let operator = operation[1];
        let b = parseFloat(operation[2]);

        let result = operate(a, operator, b);
        

        display.textContent = result;

        operation = [result, "/"];


    }
})

equals.addEventListener("click", () => {
    
    operation.push(display.textContent);

    let a = parseFloat(operation[0]);
    let operator = operation[1];
    let b = parseFloat(operation[2]);

    let result = operate(a, operator, b); 


    display.textContent = result;

    operation = [];
    console.log(operation);
    operation.push(result);    
    console.log(operation);
})




