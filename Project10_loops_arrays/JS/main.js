function CallWhile() //Counts to ten.
{
    var counter = 0;
    while(counter < 11) // Repeats the code in the body until var counter is greater than 10.
    {
        document.getElementById("while").innerHTML += "<br>" + counter; // Prints the valeu of counter on the next line.
        counter++; // Adds 1 to the currend valeu of counter.
    }
}

function SentenceLength() // Returns the numbefr of characters of the entered sentence.
{
    var sentence = document.getElementById("sentence").value; // Stores the sentence as a string variable.
    document.getElementById("length").innerHTML = "Your sentence is: " + sentence.length + " characters long." // sentence.length returns how many charaters ther are in the string.
}

function ForLoop() // Using a for loop to print al the ellements from the array
{
    var instruments = ["Guitar", "Piano", "Flute", "Drums", "Bass guitar", "Cajon", "Violin", "Cello", "Double bass", "Viola"]
    for (i = 0; i < instruments.length; i++)
    {
        document.getElementById("instrument-list").innerHTML += instruments[i] + "<br>"; 
    }
}

function ArrayFunction() // Declaring an array and assigning the individual valeu's. Then printin instruments indec nr 1 and 3.
{
    var instruments = [];
    instruments[0] = "Guitar";
    instruments[1] = "Piano";
    instruments[2] = "Flute";
    instruments[3] = "Drums";
    document.getElementById("array").innerHTML = instruments[1] + "<br>" + instruments[3];
}

function ConstantFunction() // Declaring a constant 
{
    const book = {title : "The Hobbit", pages : 320, writer : "J.R.R Tolkien"};
    book.price = "$16.49"; // adding propeties of the object in  const book is possible
    book.title = "Lord of the rings"; // chancing propeties of the object in const book is possible
    // book = 5; // Reassigning const book is not possible and throws an error in the console.
    document.getElementById("book").innerHTML = "The price of " + book.title + " is " + book.price;
}

function LetFunction() // Declaring let x ant printing it 3 times to see its behavior.
{
    let x = 54;
    document.getElementById("let").innerHTML = x + "<br>"; // Output 54.
    {
        let x = 608; // This x does not exist outside of its block ( between {}). Output 608.
        document.getElementById("let").innerHTML += x + "<br>";
    }
    document.getElementById("let").innerHTML += x + "<br>"; // Output 54.
}

function ReturnFunction(x) // Using the return keyword.
{
    var small = x + " is smaller";
    var greater = x + " is greater";
    if(x < 20)
        {
            // The return keyword returns the statement direct after it prevents the function from being executed any further.
            return document.getElementById("small").innerHTML = small; 
        }
    // This statment is only executed if the if statment is false because then the return statement isn't executed.
    document.getElementById("small").innerHTML = greater; 
}

//Object With function and returntype.
let furniture = {
    type : "table",
    material : "wood",
    length : "1800mm",
    width : "700mm",
    height : "730mm",
    Description : function() // Function whitin the furniture object.
    {
        // Returns a string whit the value's of the property's it calls from this (furniture) object.
        return "This " + this.type + " is made of " + this.material + ", and is " + this.length + " long, " + this.width + " width, " + this.height + " high"; 
    }
};

function Description() // Function to call the furniture.Description() function, and print it in the element with id furniture.
{
    document.getElementById("furniture").innerHTML = furniture.Description();
}

function BreakContinue() // Using the break and continue statments to "jump out" of the loop and to "jump out" of a iteration.
{
    var numbers = [1, 0, 0, 2, 0, 3, 0, 4, 0, 0, 5, 0, 6, 0, 0, 0, 7, 0, 8, 0, 9, 10,]; // Decleare a array of numbers.

    for (i = 0; i < numbers.length; i++) // Loop throug the numbers list.
    {
        if(numbers[i] == 7) {break;} // "Jump out" of the loop. the numbers 7 and the numbers after 7 aren't displayed becouse we broke the loop.
        if(numbers[i] == 0) {continue;} // "Jump to" the next iteration. 0 is never printed because it skips the document.getEllementById code 

        document.getElementById("break-continue").innerHTML += numbers[i] + "<br>"; // Prints the number in numbers[i] if we didn't break or continue the loop.
    }

}