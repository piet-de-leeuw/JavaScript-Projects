// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an x or o in a square.
function PlaceXOrO(squareNumber)
{
    // This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of the selectedSquares array
    // to see if it clntains the square namber cliced in.
    if (!selectedSquares.some(element => element.includes(squareNumber)))
    {
        // This variable retrieves the HTML element id that was clicked on.
        let select = document.getElementById(squareNumber);
        // This condition checks who's turn it is.
        if(activePlayer === 'X')
        {
            // Place x.png in HTML if activePlayer is 'X'.
            select.style.backgroundImage = 'url("images/x.png")';
        } 
        else
        {
            // If activePlayer is 'O', place o.png in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        // squareMumber and activePlayer are concatinated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for a win condition.
        CheckWinConditions();
        // This condition is for changing the active player. 
        if(activePlayer === 'X')
        {
            activePlayer = 'O';
        }
        else
        {
            activePlayer = 'X';
        }

        // This function place placement sounds.
        audio('./media/place.mp3');
        // This condition checks to see if it is the computers turn.
        if(activePlayer  === 'O')
        {
            // This function disables clicking during computers turn.
            // DisableClick();
            // This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { ComputersTurn(); }, 1000);
        }
        // Returning true is needed for our ComoutersTurn() function to work.
        return true;
    }

    // This Function results in a random square being selected by the computer.
    function ComputersTurn()
    {
        // This boolean is needed for our while loop.
        let success = false;
        // This variable stores a random number 0-8.
        let pickASquare; 
        // This condition allows our wile loop to keep trying if a square is already selected.
        while(!success)
        {
            // seleced a number between 0-8.
            pickASquare = String(Math.floor(Math.random()*9));
            // If the random number evaluated returns true, the square hasn't been selected yet.
            if(PlaceXOrO(pickASquare))
            {
            // This line calls the function.
                PlaceXOrO(pickASquare);
                // This ends the loop
                success = true;
            }

        }
    }
    
}

// This function parses the selectSquares array to search for win conditions.
// drawLine() function is called to draw a line on the screen if the condition is met.
function CheckWinConditions()
{
    // X 0, 1, 2 condition.
    if(ArrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition.
    else if(ArrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition.
    else if(ArrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition.
    else if(ArrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition.
    else if(ArrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition.
    else if(ArrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 8 condition.
    else if(ArrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition.
    else if(ArrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition.
    else if(ArrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition.
    else if(ArrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition.
    else if(ArrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition.
    else if(ArrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition.
    else if(ArrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition.
    else if(ArrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 8 condition.
    else if(ArrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition.
    else if(ArrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    // This condition checks for a tie. 
    else if(selectedSquares.length >= 9) 
    { 
        audio('./media/tie.mp3')
        setTimeout(function () { ResetGame(); }, 500);
    }

    // This function checks if an array includes 3 strings. it is used to check for each win condition.
    function ArrayIncludes(squareA, squareB, squareC)
    {
        // these 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // If the 3 variablels we pass are all included in our array then
        // true is returned and our else if condition executes the drawLine() function.
        if(a === true && b === true && c === true) {return true;}
    }
}

// This function makes our body element temporarlily unclickable.
function DisableClick()
{
    // This makes our body unclickable.
    body.style.pointerEvents = 'none';
    // This makes our body clickable again after 1 second.
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

// this function takes a string parameter of the path of the sound you want to play.
function audio(audioURL)
{
    // We create a new audio object and we pass the path as parameter.
    let audio = new Audio(audioURL);
    // Play methot plas our audio sound.
    audio.play();
}

// This function uses HTML canvas to draw a Winlines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2)
{
    //This line acces our HTML canvas element.
    const canvas = document.getElementById("win-lines");
    // This line gives us acces to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    // This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        // This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        // This line indicates where the end of a lines x axis is.
        x2 = coordX2,
        // This line indicates where the end of a lines y axis is.
        y2 = coordY2,
        // This variable stores temoprary x axis data we update in our animations loop.
        x = x1,
        // This variable stores temoprary y axis data we update in our animations loop.
        y = y1;

    // This function interacts whit the canvas.
    function animateLineDrawing() 
    {
        // This variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from the last loop iteration.
        c.clearRect(0,0,608,608);
        // This method starts a new path.
        c.beginPath();
        // This method moves us to the starting point in our line.
        c.moveTo(x1, y1);
        // This method indicates the endpoint in our line.
        c.lineTo(x, y);
        // This method sets line width.
        c.lineWidth = 10;
        // This method sets line color.
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        // This line draws everything we laid aut bove.
        c.stroke();
        // This condition checks if we reached the endpoints and adds 10 to x and y if not.
        if(x1 <= x2 && y1 <= y2) 
        {
            if(x < x2) {x += 10;}
            if(y < y2) {y += 10;}
            // this is necessary for the 6, 4, 2 win conditions.
            if(x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
        }
        // this is necessary for the 6, 4, 2 win conditions.
        if(x1 <= x2 && y1 >= y2) 
        {
            if(x < x2) { x += 10}
            if(y > y2) { y -= 10}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }

    // This function clears the canvas after the win lines are drawn.
    function clear()
    {
        // this line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        // This line clears our canvas.
        c.clearRect(0,0,608,608);
        // This line stops the loop.
        cancelAnimationFrame(animationLoop); 
    }
    // this line disallows clicking wile the win sound is playing.
    DisableClick();
    // this line plays the win sound..
    audio('./media/winGame.mp3');
    //this line calls our main animations loop.
    animateLineDrawing();
    // This line waits 1 sec. then , clears canvas, resets game, and allows clicking again.
    setTimeout(function() {clear(); ResetGame(); }, 1000);

}

// this function resets the game after it's won or it's a tie.
function ResetGame()
{
    // This for loop iterates through each HTML square element.
    for(let i = 0; i < 9; i++)
    {
        //  This variable stores the HTML square element.
        let square = document.getElementById(String(i));
        // This removes our element background image.
        square.style.backgroundImage = '';
    }
    // This resets our array so it is empty and we can start over.
    selectedSquares = [];
}