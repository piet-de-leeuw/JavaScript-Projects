function Add() // Adds the numbers in the var and prints the string in the element of index.html with the id math.
{
    var A = 204569 + 2200459;
    document.getElementById("math").innerHTML = "204569 + 2200459 = " + A;
}

function Subtract() // Subtracts the numbers in the var and prints the string in the element of index.html with the id subtract.
{
    var B = 300645 - 50332;
    document.getElementById("subtract").innerHTML = "300645 - 50332 = " + B;
}

function Multiply() // Multiplys the numbers in the var and prints the string in the element of index.html with the id multiply.
{
    var C = 54 * 57;
    document.getElementById("multiply").innerHTML = "54 x 57 = " + C;
}

function Divide() // Devides the numbers in the var and prints the string in the element of index.html with the id devide.
{
    var D = 40556923 / 543;
    document.getElementById("divide").innerHTML = "40556923 : 543 = " + D;
}

function Modulus() // Divides the mathproblem in the var and returns the remainder and prints the string in the element of index.html with the id modulus.
{
    var E = 54 % 7;
    document.getElementById("modulus").innerHTML = "If you divide 54 by 7 the remainder is " + E;
}
function MultiMathOperations()
{
    var F = 5 + 12 - 4 * 8 / 3;
    document.getElementById("multi-math").innerHTML = "5 + 12 - 4 x 8 : 3 = " + F;  
}

function Negation() // outputs the opposite (positive <> negative) of the variable in index.html element id negation.
{
    var G = 10;
    var H = -10
    document.getElementById("negation").innerHTML = -G + " and " + -H; 
}

function InDecrement() // Increment var I by 1 and then Decrement var I by 1'
{
    var I = 5
    document.getElementById("in-decrement").innerHTML = "Increment from " + I + " to " + ++I + ". Decrement from " + I + " to " + --I;
}

function Random() // returns a random number to the index.html element with id random.
{
    var J = Math.random() * 100;
    document.getElementById("random").innerHTML = J;
}

// We had to reasearch Math object methods anf=d those one of them.
function Log10() // Uses Math.log10() to determan how many times 10 has to be multiplied to reach var K.
{
    var K = 4000;
    document.getElementById("log10").innerHTML = Math.log10(K);
}