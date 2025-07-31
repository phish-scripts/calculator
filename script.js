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

operate("-", 5, 3)









