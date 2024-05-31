//// Ternary exercises \\\\

function Ride_Function() // Print if someone is to short or tall enoug to ride.
{
    var height , canRide;
    height = document.getElementById("height").value;
    console.log(height);
    canRide = (height < 52) ? "You are to short":"You are tall enough"; // Determines if the input (id heigth) is smaller, equal or larger as 52 and returns one of both answers depending on the condition being true or false. 
    console.log(height < 52);
    document.getElementById("ride").innerHTML = canRide + " to ride";
}

function CanVote() // Print if someone in to young or old enoug to vote.
{
    var age = document.getElementById("age").value;
    var canVote = (age < 18) ? "You are to young":"You are old enough";
    document.getElementById("can-vote").innerHTML = canVote + " to vote!";
}

//// Constructor exercises \\\\

function Vehicle(make, model, year, color) // creating an constructor using the new and this keyword.
{
    this.vehicle_make = make;   //the this keyword takes the object it is on. (In this case the variable that uses this function for its declaration.) 
    this.vehicle_modle = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

// declearing 3 var to an inctance of Animale() using the new Keyword.
var jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var emile = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function MyFunction() // printing a sentence to the screen using propetys of the var erik.
{
    document.getElementById("keywords_and_constructors").innerHTML = "Erik drives a " + erik.vehicle_color + "-colord " + erik.vehicle_modle + " manufactured in " + erik.vehicle_year;
}


//doing the same as above for practice.
function Animale(type, age, action)
{
    this.type = type;
    this.age = age;
    this.action = action;
}

var quinty = new Animale("dog", 13, "eating");

function PrintAnimale()
{
    document.getElementById("new_and_this").innerHTML = "Quinty is a " + quinty.type + ". She is " + quinty.age + " and is currantly " + quinty.action + ".";
}

//// Nested Functions \\\\ 
function CountFunction() // using a nested function to count 1 up to the startnr.
{
    document.getElementById("nested-function").innerHTML = Count()
    function Count()
    {
        var startnr = 3;
        startnr += 1;
        return startnr;
    }
}