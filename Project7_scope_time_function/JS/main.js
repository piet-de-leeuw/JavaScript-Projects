var globalvar = 5;
 
function GlobalVariable() // function using global variable.
{
    document.getElementById("global").innerHTML = 5 + globalvar;
}

function LocalVariable() // function using local varable whitin the function.
{
    var localvar = 24;
    document.getElementById("local").innerHTML = 5 + localvar;
}

function ErrorVariable() // function using local variable outsite function trowing an error in the console.
{
    console.log(globalvar + localvar);
    document.getElementById("error").innerHTML = globalvar + localvar;
}

function Greetings() // Using an if statment to print "How are you doing today?" if the current time is earlier as 18h00;
{
    if(new Date().getHours() < 18)
    {
        document.getElementById("greetings").innerHTML = "How are you doing today?";
    }
}

function BiggerNumber() // Using if, else statment to return "This number is bigger" if the condition is true and if the condition is false.
{
    var number = document.getElementById("bigger-number").value; // Gets user input.

    if(number > 50) // Checks if the input is bigger or smaller as 50.
    {
        document.getElementById("isbigger").innerHTML = "This number is bigger"; // Is retured if true.
    }
    else
    {
       document.getElementById("isbigger").innerHTML = "This number is smaller"; // Is returend if false.
    }
}

function  Doing() // Returns a different answer for differend inputs.
{
    var input = document.getElementById("doing").value; // Gets user input.
    var answer; // Stores answer.
    if(input == "Walking" || input == "walking") 
    {
        answer = "Great have a nice walk!"; // Is stored in answer wenn input is Walking or walking.
    }
    else if(input == "Sleeping" || input == "sleeping")
    {
        answer = "Then how are you writing this???"; // Is stored in answer wenn input is Sleeping or sleeping.
    }
    else
    {
        answer = "Dit you misspell somthing or are you doing somthing else?" 
    }
    document.getElementById("answer-doing").innerHTML = answer; // Is stored in answer wenn input is anithing else as Walking, walking, Sleeping or sleeping.
}

