// detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// detecting keyboard press

document.addEventListener("keydown", function(event){
    makeSound(event.key); // .key is a property of the event object that tells us which key was pressed.
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(key);
    }
}
// adding animation to buttons
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100); // setTimeout is a function that takes two arguments: a function and a time in milliseconds. The function is executed after the time has passed.
}
    /*function handleClick() {
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    } This is a named function */

    /* this.style.color = "white"; */
    
    /* document.querySelector("button").addEventListener("click", function () {
        alert("I got clicked!");
    }}; --> This is an anonymous function */

