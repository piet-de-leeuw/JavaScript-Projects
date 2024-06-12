// Object to keep track of entered values.
const calculator = {
    // Display 0 on calculator screen.
    displayValue: '0',
    // Stores the first operand of the calculation.
    firstOperand: null,
    // checks if a second operand is entered.
    waitSecondOperand: false,
    // Stores the entered operator.
    operator: null
};

// Modifies values each time a number button is clicked on. (Is called at the bottom of the UpdateDisplay() function when the function isn't returned before.)
function InputDigit(digit)
{
    const {displayValue, waitSecondOperand} = calculator;
    // Sets DisplayValue to digid (the number button that was clicked on) if waitSecondOperand is true.
    if(waitSecondOperand === true)
    {
        calculator.displayValue = digit;
        calculator.waitSecondOperand = false;
    }
    else
    {
        // Overwrites displayValue if 0 else addes on tu the currend value.
        calculator.displayValue= displayValue === '0' ? digit : displayValue + digit;
    }
}

// Handeling decimal point.
function InputDecimal(dot)
{
    // Prevent bugs by accedentally clicking the  decimal point a second time.
    if(calculator.waitSecondOperand === true) {return;}
    // Adds decimal point if there isn't one already.
    if (!calculator.displayValue.includes(dot))
    {
        calculator.displayValue += dot;
    }
}

// This section handles operators
function HandleOperator(nextOperator) 
{
    const {firstOperand, displayValue, operator} = calculator;
    //Stores displayValue as a number.  
    const inputValue = parseFloat(displayValue);
    // Updates operator if there already exists an operator and if waitSeconOperator is true.
    if(operator && calculator.waitSecondOperand)
    {
        calculator.operator = nextOperator;
        return;
    }
    // Stores inputValue in firstOperand if it is null.
    if(firstOperand == null)
    {
        calculator.firstOperand = inputValue;
    }
    else if (operator) // Checks if a operator already exists.
    {
        const valueNow = firstOperand || 0;
        // Searches for the operator in preformCalculations() and exexutes the corresponding function.
        let result = PreformCalculation[operator](valueNow, inputValue);
        // Makes the amound of numbers after the decimal fixed to 9 decimals.
        result = Number(result).toFixed(9);
        // Gets rid of trailing 0's.
        result = (result *1).toString();
        calculator.displayValue = parseFloat(result);
        calculator.firstOperand = parseFloat(result);
        UpdateDisplay();
    }
    calculator.waitSecondOperand = true;
    calculator.operator = nextOperator;
}

const PreformCalculation = {
    '/' : (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*' : (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+' : (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-' : (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=' : (firstOperand, secondOperand) => secondOperand
};

function CalcularionReset()
{
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitSecondOperand = false;
    calculator.operator = null;
}

// Updates the calculator screen.
function UpdateDisplay()
{
    const display = document.querySelector(".calculator-screen");
    display.value = calculator.displayValue; 
}

UpdateDisplay();

// This section monitors botton clicks.
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // Target represents the element that was clicked.
    const {target} = event;
    
    // If the clicked element is not a button return.
    if(!target.matches('button')) {return;}

    if(target.classList.contains('operator'))
    {
        HandleOperator(target.value);
        UpdateDisplay;
        return;
    }
    if(target.classList.contains('decimal'))
    {
        InputDecimal(target.value);
        UpdateDisplay();
        return;
    }
    if(target.classList.contains('all-clear'))
    {
        CalcularionReset();
        UpdateDisplay();
        return;
    }
    InputDigit(target.value);
    UpdateDisplay();
})