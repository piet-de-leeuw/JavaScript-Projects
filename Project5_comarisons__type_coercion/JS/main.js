
function Coercion()
{
    document.getElementById("coercion").innerHTML = 5 + "ten" + 5 + "10" // Using coercion to concatinate numbers and strings.
}

function WhichType() // returns the type of the var a.
{
    var a = "Apple";
    document.getElementById("type").innerHTML = typeof a;
}

function MyFunction() // output NaN because you cand divide 0 by 0.
{
    document.getElementById("test").innerHTML = 0/0;
}

function Nan() // using isNaN() (checks if the given atribute is a number) to display true and false. 
{
    var b = isNaN('is this a not a number?'); //true, beacause 'is this a not a number?' is this a not a number.' 
    var c = isNaN(5); // false, because 5 is a number
    document.getElementById("nan").innerHTML = b + " " + c;
}

function DisplayInfinity() // Displaying infinity by using a number larger as 1.7976931348623157E308.
{
    var d = 2E310;
    document.getElementById("infinity").innerHTML = d;
}

function NegativeInfinity() // Displaying infinity by using a number smaller as -1.7976931348623157E308.
{
    var e = -3E310;
    document.getElementById("-infinity").innerHTML = e;
}

function GreaterLesserThan() // Using the greather end lesser than operators to determan if numbers are greather or lesser than each other.
{
    document.getElementById("greater").innerHTML = 1.3E4 > 1.3E2;
    document.getElementById("lesser").innerHTML = 1.3E4 < 1.3E2;
}

function Equal() // Determen if left from == is equal to right from ==. output true or false. 
{
    document.getElementById("equal").innerHTML = (5 + 10) == 15;
    document.getElementById("not-equal").innerHTML = 3 == 12;
}

function TripleEqual() // same as equal() but checks also if the data type is the same.
{
    var f = 25;
    var g = 25;
    var h = "dertig";
    var i = 5E2;
    var j = 30;

    document.getElementById("same-type-valeu").innerHTML = f === g;
    document.getElementById("different-type-valeu").innerHTML = f === h;
    document.getElementById("different-type").innerHTML = f === i;
    document.getElementById("different-valeu").innerHTML = f === j;
}

function And() // determans if both statements left and right of the operator are treu.
{
    document.getElementById("and-true").innerHTML = 100 > 45 && 10 < 45; 
    document.getElementById("and-false").innerHTML = 100 < 45 && 10 < 45;
}

function Or() // determans if at least statements left and right of the operator are treu.
{
    document.getElementById("or-true").innerHTML = 345 < 240 || 5 < 25;  //Even thow one statement is fals it returns treu because the richt statment is true.
    document.getElementById("or-false").innerHTML = 345 < 240 || 5 > 25;
}

function Not() // Using the Not operator to return true or false.
{
    document.getElementById("not-true").innerHTML = !(20 < 15);
    document.getElementById("not-false").innerHTML = !(20 > 15);
}

// exercises whit the browser consol. (press F12 in your browser and click the console tab.)
console.log(3 * 3 + 4); // displaying the result in the browser console;
console.log(10 > 19); // displays false in the console