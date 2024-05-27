function PrintText() //This function prints the var strings in the html element whit ID demo.
{
    var string1 = "Hello my dear.";
    var string2 = " Do you like this beautiful apple?";
    document.getElementById("demo").innerHTML = string1 + string2; //prints the var strings in the html element whit ID demo.
}

function Concatenate() //This function prints the variable text in the html element whit ID concatenate.
{
    var string3 = "Yes, please,";
    string3 += " it looks delicious"; //concatenates the new string whit the old string from string3.
    document.getElementById("concatenate").innerHTML = string3; //prints the variable text in the html element whit ID concatenate.
} 