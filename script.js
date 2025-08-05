// DOM 
console.log("We are ready to go. Also, if you are looking at the console, please feel free to code review");
console.log("watch \"backcap adventures\" by bigwii on youtube ");
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


// variables 
let operator = ""
let firstNumber = NaN;
let secondNumber = NaN;

let displayRefresh = false;

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
    console.log("operator: " +  operator);
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

let resultHistory = [];
let counter = 0;

let history = document.querySelector(".history");

let historyCounter = 0;


function resultFormed()
{
    if (!isNaN(resultHistory[counter]) && ((operator == "+" || operator == "-" || operator == "/" || operator == "*") && (!isNaN(display.textContent))))
    {
        let newResult = document.createElement("li");
        newResult.textContent = "#" + counter + ": " + resultHistory[counter];
        newResult.classList.add("removeLater")
        history.appendChild(newResult);
        display.textContent = ""
        counter++;
        historyCounter++;

    
    }

    console.log("Here are the history of numbers used: " + resultHistory);
}

// event listeners (numbers)
one.addEventListener("click", () => {

    resultFormed()
    display.textContent += "1";
    console.log("Entered 1");
})

two.addEventListener("click", () => {

    resultFormed()
    display.textContent += "2";
    console.log("Entered 2");
})

three.addEventListener("click", () => {

    resultFormed()
    display.textContent += "3";
    console.log("Entered 3");
})

four.addEventListener("click", () => {
    resultFormed()
    display.textContent += "4";
    console.log("Entered 4");
})

five.addEventListener("click", () => {
    resultFormed()
    display.textContent += "5";
    console.log("Entered 5");
})

six.addEventListener("click", () => {
    resultFormed()
    display.textContent += "6"; 
    console.log("Entered 6");
})

seven.addEventListener("click", () => {
    resultFormed()
    display.textContent += "7"; 
    console.log("Entered 7");
})

eight.addEventListener("click", () => {
    resultFormed()
    display.textContent += "8"; 
    console.log("Entered 8");
})

nine.addEventListener("click", () => {
    resultFormed()
    display.textContent += "9"; 
    console.log("Entered 9");
})

zero.addEventListener("click", () => {
    resultFormed()
    display.textContent += "0";
    console.log("Entered 0"); 
})



// Event Listeners (Operators)


/*
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
*/


adding.addEventListener("click", () => {

    if (isNaN(firstNumber))
    {
        
        firstNumber = parseFloat(display.textContent);
        display.textContent = "";

        console.log("firstNumber: " + firstNumber)
        console.log("Operator: " + operator)
        console.log("secondNumber: " + secondNumber)
    }

    if (!isNaN(firstNumber) && (operator == "+" || operator == "-" || operator == "/" || operator == "/"))
    {
        secondNumber = parseFloat(display.textContent);
        let result = operate(firstNumber, operator, secondNumber);
        operator = "";
        secondNumber = NaN;
        firstNumber = result;
        resultHistory.push(result);

        display.textContent = firstNumber;

        console.log("firstNumber: " + firstNumber)
        console.log("Operator: " + operator)
        console.log("secondNumber: " + secondNumber)
        


    }

    if (isNaN(firstNumber) && operator== null)
    {
        display.textContent = ""
        
    }
    operator = "+";

})



subtracting.addEventListener("click", () => {

    if (isNaN(firstNumber))
    {
        
        firstNumber = parseFloat(display.textContent);
        display.textContent = "";

        console.log("firstNumber: " + firstNumber)
        console.log("Operator: " + operator)
        console.log("secondNumber: " + secondNumber)
    }



    if (!isNaN(firstNumber) && (operator == "+" || operator == "-" || operator == "/" || operator == "/"))
    {
        secondNumber = parseFloat(display.textContent);
        let result = operate(firstNumber, operator, secondNumber);
        operator = "";
        secondNumber = NaN;
        firstNumber = result;
        display.textContent = firstNumber;

        console.log("firstNumber: " + firstNumber)
        console.log("Operator: " + operator)
        console.log("secondNumber: " + secondNumber)
        


    }


    if (!isNaN(firstNumber) && operator== null)
    {
        display.textContent = ""
        
    }



    operator = "-";

})



multiplying.addEventListener("click", () => {

    if (isNaN(firstNumber))
    {
        
        firstNumber = parseFloat(display.textContent);
        display.textContent = "";

        console.log("firstNumber: " + firstNumber)
        console.log("Operator: " + operator)
        console.log("secondNumber: " + secondNumber)
    }



    if (!isNaN(firstNumber) && (operator == "+" || operator == "-" || operator == "/" || operator == "/"))
    {
        secondNumber = parseFloat(display.textContent);
        let result = operate(firstNumber, operator, secondNumber);
        operator = "";
        secondNumber = NaN;
        firstNumber = result;
        display.textContent = firstNumber;

        console.log("firstNumber: " + firstNumber)
        console.log("Operator: " + operator)
        console.log("secondNumber: " + secondNumber)
        


    }


    if (isNaN(firstNumber) && operator== null)
    {
        display.textContent = ""
        
    }



    operator = "*";

})


dividing.addEventListener("click", () => {

    if (isNaN(firstNumber))
    {
        
        firstNumber = parseFloat(display.textContent);
        display.textContent = "";

        console.log("firstNumber: " + firstNumber)
        console.log("Operator: " + operator)
        console.log("secondNumber: " + secondNumber)
    }



    if (!isNaN(firstNumber) && (operator == "+" || operator == "-" || operator == "/" || operator == "/"))
    {
        secondNumber = parseFloat(display.textContent);
        let result = operate(firstNumber, operator, secondNumber);
        operator = "";
        secondNumber = NaN;
        firstNumber = result;
        display.textContent = firstNumber;

        console.log("firstNumber: " + firstNumber)
        console.log("Operator: " + operator)
        console.log("secondNumber: " + secondNumber)
        


    }


    if (isNaN(firstNumber) && operator== null)
    {
        display.textContent = ""
        
    }


    operator = "/";

})

equals.addEventListener("click", () => {
    secondNumber = parseFloat(display.textContent);

    let result = operate(firstNumber, operator, secondNumber)
    display.textContent = result
    firstNumber = result;
    resultHistory.push(result);
    operator = "";
    secondNumber = NaN;
});

clear.addEventListener("click", () => {
    operator = "";
    firstNumber = NaN;
    secondNumber = NaN;
    display.textContent = "";
    counter = 0;
    resultHistory = [];
    historyCounter = 0;
    
    console.log(resultHistory);
    console.log("firstNumber: " + firstNumber)
    console.log("Operator: " + operator)
    console.log("secondNumber: " + secondNumber)
    console.log("clearing array");
    console.log("clearing history");
    clearHistoryList();
})

function clearHistoryList()
{
    document.querySelectorAll(".removeLater").forEach(e => e.remove());
    console.log("history cleared...");


}











