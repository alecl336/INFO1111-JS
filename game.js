var highest = 0
var lowest = 101
counter = 0;
//Event Listener allows multiple event handlers to be placed on one single event, in this case, the click of the button.
//The "document.getElementById()" part recognises the element by its unique Id.
//On click, the function "rangegenerator" will run.
document.getElementById("rangesubmission").addEventListener("click", rangegenerator)
var rangefornum;
var random_no
//This function generates the range of numbers that the generated random number can take.
function rangegenerator() {
    rangefornum = document.querySelector('input[name="numRangein"]:checked').value;
    if (rangefornum == "10"){
        random_no = Math.floor(Math.random() * 11);
    } else if (rangefornum == "20"){
        random_no = Math.floor(Math.random() * 21);
    } else {
        rangeofthenum = Number(document.getElementById("customnum").value)
        random_no = Math.floor(Math.random()*(rangeofthenum + 1))
    }
    console.log(random_no); //logs the random_no value to the console. Used for testing
    reset()
}

//On click, the function onSubmissionClicked is called.
document.getElementById("submission").addEventListener("click", onSubmissionClicked);

//This function contains 5 functions within that will run when the function is called.
function onSubmissionClicked() {
    numberchecker();
    counterchecker();
    guessrecorder();
    highestnum();
    lowestnum();
}

//This function checks the amount of guesses a user has made. Every time the event "click" occurs, the function runs.
function counterchecker() {
    //The counter increments by one.
    counter++
    //Extracts value from user input with name numRangin, and assigns to variable checkingvalue.
    checkingvalue = document.querySelector('input[name="numRangein"]:checked')?.value;
    document.querySelector("#guessmsg").innerText = ""
    if (checkingvalue == "10"){
        //If counter reaches 5 (guesses), then the message displays, and the game resets.
        if(counter == 5) {
            document.querySelector("#guessmsg").innerText = "You've reached five guesses and ran out of rounds! Choose a new level"
        } 
    }else if (checkingvalue == "20"){
        //If counter reaches 10 (guesses), then the message displays, and the game resets.
        if (counter == 10) {
            document.querySelector("#guessmsg").innerText = "You've reached ten guesses and ran out of rounds! Choose a new level"
        }
    }else{
        maxnumofguess = Number(document.getElementById("customguess").value)
        //If counter reaches user inputted max (guesses), then the message displays, and the game resets.
        if(counter == maxnumofguess){
            document.querySelector("#guessmsg").innerText = "You've reached the max amount of guesses! Choose a new level"
        }
    }
    //This line replaces the text in <p2> (with id "guessintotal"), revealing the total guesses and concatenated with the updated counter.
    document.querySelector("#guessintotal").innerHTML = "Total Guesses: " + counter
}
//This function checks for higher or lower, and displays information.
function numberchecker() {
    var x = document.getElementById("numeric").valueAsNumber
    if (x === random_no) {
        document.getElementById("responsemsg").innerText = "Congrats! You got the number! Please pick new range/difficulty." //message displayed when user correctly guesses.
    } else if (x < random_no) {
        document.getElementById("responsemsg").innerText = "Too low!"; //message displayed when user guess is too low.
    } else {
         //message displayed when user guess is too high.
        document.getElementById("responsemsg").innerText = "Too high!";
    }
}
// This function should record the made guesses.
function guessrecorder() {
    var y = document.getElementById("numeric").value
    document.getElementById("madeguess").innerText = document.getElementById("madeguess").innerText + ' ' + y
}
//This function resets all the text to original. Used to set a new game.
function reset() {
    document.getElementById("madeguess").innerText = "Made Guesses:"
    counter = 0;
    document.querySelector("#guessintotal").innerHTML = "Total Guesses: " + counter
    document.getElementById("numeric").value = 0;
    document.querySelector("#high").innerHTML = "Highest Guess: "
    document.querySelector("#low").innerHTML = "Lowest Guess: "
    document.getElementById("responsemsg").innerText = ""
    highest = 0
    lowest = 101
}
//This function checks for highest number. If the input number is higher than highest, then value of highest becomes user input (x)
function highestnum(){
    var x = document.getElementById("numeric").valueAsNumber
    if (x > highest){
        highest = x
    }
    document.querySelector("#high").innerText = "Highest Guess: " + highest
}
//This function checks for lowest number. If the input number is lower than lowest, then value of lowest becomes user input (a)
function lowestnum() {
    var a = document.getElementById("numeric").valueAsNumber
    if (a < lowest) {
        lowest = a
    }
    document.querySelector("#low").innerText = "Lowest Guess: " + lowest
}