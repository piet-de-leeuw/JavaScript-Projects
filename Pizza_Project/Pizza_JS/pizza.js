function GetReceipt()
{
    // This function initilises a string  that is passed from function to function, 
    // growing line by line into a full receipt.
    var receipt = "<h3>You Orderd:</h3>"; 
    var runningTotal = 0; // The total cost of the receipt. 
    var sizeTotal = 0; // the cost for the selected size;
    var sizeArray = document.getElementsByClassName("size"); // Stores all availeble size options.
    for(var i = 0; i < sizeArray.length; i++) // Loops through sizeArray.
    {
        if(sizeArray[i].checked) // Checks if an element in sizaArray is checked.
        {
            var selectedSize = sizeArray[i].value; // Stores the checked size.
            receipt= receipt + selectedSize + "<br>"; // Concatenates the values from receipt and selectedSize into 1 string. 
        }
    }

    // This section checks which size is chosen and stores the cost for that size in runningTotal.
    if(selectedSize === "personal-pizza") {sizeTotal = 6;}
    else if(selectedSize === "small-pizza") {sizeTotal = 8;}
    else if(selectedSize === "medium-pizza") {sizeTotal = 10;}
    else if(selectedSize === "large-pizza") {sizeTotal = 14;}
    else if(selectedSize === "extra-large-pizza") {sizeTotal = 16;}
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size receipt: " + receipt);
    console.log("subtotal: $" + runningTotal + ".00");
    // passing the var runningTotal and receipt through to the next function.
    GetTopping(runningTotal, receipt);

}

function GetTopping(runningTotal, receipt)
{
    var toppingTotal = 0; // Total cost toppings.
    var selectedTopping = []; // Stores which toppings are selected.
    var toppingArray = document.getElementsByClassName("toppings", "vegetables"); // Gets all availeble toppings options in an array. (Vegetables and Meats)
    console.log(toppingArray);
    for(var i = 0; i < toppingArray.length; i++) // loops through the toppings options.
    {
        if(toppingArray[i].checked) // if an topping option is selected add it to selectedTopping.
        {
            selectedTopping.push(toppingArray[i].value);
            console.log("selected topping item: (" + toppingArray[i].value +")"); // print the selected topping to the console.
            receipt = receipt + toppingArray[i].value + "<br>"; // Concatenates the values from receipt and toppingArray into 1 string. 
        }
    }

    // This section checks how much toppings are chosen and stores the costs for those toppings in toppingTotal (We do -1 because 1 topping is free.).
    var toppingCount = selectedTopping.length;
    if(toppingCount > 1)
    {
        toppingTotal = (toppingCount - 1);
    }
    else
    {
        toppingTotal = 0;
    }

    runningTotal = (runningTotal + toppingTotal); // Adds the topping costs to the total costs. 
    console.log("total selected toppins: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" +toppingTotal + ".00");
    console.log( "topping receipt: " + receipt);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("show-text").innerHTML = receipt; // Print the order to the screen
    document.getElementById("total-price").innerHTML = "<h3> Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"; // Print the total cost to the screen.
}
