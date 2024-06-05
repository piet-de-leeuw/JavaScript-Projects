////Countdown Timer\\\\
function Countdown()
{
    var seconds = document.getElementById("seconds").value; // gets the inputed number of seconds

    function tick()
    {
        seconds = seconds -1; 
        timer.innerHTML = seconds;
        var time = setTimeout( tick, 1000); // call tick() after 1000ms have past
        if(seconds == -1) // Displays a alert box whit time is up if the timer is eaqual to -1
        {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }   
    }
    tick();
}

////Slide Show\\\\
var slideIndex = 1;
ShowSlides(slideIndex);

// Next and Prev button \\
function NextSlide(n)
{
    ShowSlides(slideIndex += n);
}

// dots \\
function CurrentSlide(n)
{
    ShowSlides(slideIndex = n);
}

// Showing the slide \\
function ShowSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length) {slideIndex = 1;}
    if(n < 1) {slideIndex = slides.length;}

    for(i=0; i < slides.length; i++) // Making shure the nonActive slides aren't displayed
    {
        slides[i].style.display = "none";
    }
    for(i=0; i < dots.length; i++) // Makes the non active dots gray again.
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex -1].style.display = "block"; // displaying the active slide
    dots[slideIndex -1].className += " active" // makes the active dot black
}

