function Concatenate() // this function concatenates multiple strings together.
{
    var firstPart = "I started this ";
    var middlePart = "sentence in three parts and assambled ";
    var lastPart = "it whit conact()."
    var Sentence = firstPart.concat(middlePart, lastPart);
    document.getElementById("sentence").innerHTML = Sentence;
}

function Slice()
{
    var sentence = "I will slice a part out of this sentence."
    var slice = sentence.slice(12, 27); // returns the string beginning at the position of the first argument and ending at the position of the second argument.  
    document.getElementById("slice").innerHTML = slice;
}

function Search() // Searches a word in a sentence and returns its position.
{
    var sentence = "Let's search this sentence for a word and return its position.";

    document.getElementById("search").innerHTML = sentence.search("word");
}

function UpperCase()
{
    var sentence = "let's display this sentence uppercase.";
    document.getElementById("to-upper").innerHTML = sentence.toUpperCase(sentence);
}

function ValueOf() // returns primitive string of a strin. returns null as "null" unlike .toString();
{
    var sentence = "Just text for exercise purpose.";
    var valueOf = sentence.valueOf();
    document.getElementById("value-of").innerHTML = valueOf;
}

function ToString() // Returns an object as a string.
{
    var aNumber = 783.435565
    var aString = aNumber.toString();
    document.getElementById("to-string").innerHTML = aString;
}

function ToFixed() // Returns a number whit a the number of decimals specified in the argument.
{
    var aNumber = 783.435565
    var fixedNumber = aNumber.toFixed(4);
    document.getElementById("to-fixed").innerHTML = fixedNumber;
}

function ToPrecision() // Format a number to a specified length.
{
    var aNumber = 783.435565
    var precision = aNumber.toPrecision(4);
    document.getElementById("to-precision").innerHTML = precision;
}