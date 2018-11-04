//create an array
// make random selection
//make it so it can tell how many letters in each word of the array
// how many guesses left
//display "_ " for each letter

// Variables and Array 

var westeros = [
    "winterfell",
    "the iron islands",
    "riverrun",
    "the twins",
    "the eyrie",
    "casterly rock",
    "oldtown",
    "dragonstone",
    "kings landing",
    "dorne",
]

var wrongLetters = [];


// create a random city generator
var randomChoice = Math.floor(Math.random() * westeros.length);
var city = westeros[randomChoice];
var myLength = city.length;
var lose = 0;
var wins = 0;

console.log(city);
console.log(myLength);


// console.log(underScore);

// var letters = city.split(" "); ????

//return each letter by itself

var letters = city;
for (var i = 0; i < city.length; i++) {
    console.log(city.charAt(i));
}


var output = " ";
// var underScore = [myLength];



var game = function () {
    // for (var J = 0; J < city.length; J++) {
    //     underScore[J] = "_ ";
    //     output = output + underScore[J];
    // }

    document.getElementById("currentWord").innerHTML = empty.join("");
}

window.onload = function () {
    game();
}



var empty = []
for (var a = 0; a < city.length; a++) {
    empty.push("_ ")
}

// var under = game ()
//  console.log(empty);

var attempt = 10;
var guess = " ";
var counter = 0;
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",]
var emptyGuessed = []
document.onkeyup = function (event) {
    // .indexOf (Finds if letter exist if not return -1)
    // want indexof if it exists in the word
    // if the letter is in the word replace the underscore with the letter
    // if wrong push into empty array using .push()
    // var key = city.indexOf(event.key)
    // if(city.indexOf(event.key) >= 0) {
    //     empty[key] = event.key;

    // }
    // console.log(output)



    console.log(emptyGuessed);
    var letters = city.split("")

    // This loop replaces inputs " " if there is a " " in the array it also replaces the letter if it has been guessed correctly.

    for (var b = 0; b < letters.length; b++) {
        if (letters[b] == " ") {
            empty[b] = " ";
        }
        if (event.key == letters[b]) {
            empty[b] = event.key
        }

    }
    ////////////////////// WHAT SHOULD I INPUT TO MAKE COMPARISON CORRECT?
    if (letters.indexOf(event.key) === -1 && abc.indexOf(event.key) > -1) {
        wrongGuess()
    }

    // This loop check if key pressed is a letter and if it is, it prints on guessed letters
    for (var c = 0; c < abc.length; c++) {
        if (event.key == abc[c]) {
            emptyGuessed[c] = event.key;
        }
    }

    if (attempt == -1) {
        lost()
    }

    function wrongGuess() {
        attempt--
    }

    function lost() {
        lose++
        resetGame()

    }
    function newWord(){
        randomChoice = Math.floor(Math.random() * westeros.length);
        city = westeros[randomChoice];
        myLength = city.length;
        letters = city.split("")
        for (var a = 0; a < city.length; a++) {
            empty.push("_ ")
        }
    }
    function resetGame() {
        attempt = 10;
        emptyGuessed = [];
        wrongGuess = [];
        empty = [];
        document.getElementById("guessRemaining").textContent = "";
        document.getElementById("lettersAlreadyGuessed").textContent = "";
        document.getElementById("currentWord").textContent = "";
        newWord();
        game();
    }

    function win() {
        wins++;
        resetGame();
    }

    document.getElementById("currentWord").innerHTML = empty.join("");
    if (empty.indexOf('_ ') === -1) {
        win()
    }
    document.getElementById("lettersAlreadyGuessed").innerHTML = emptyGuessed.join("  ");
    document.getElementById("guessRemaining").innerHTML = attempt;
    document.getElementById("loses").innerHTML = lose;
    document.getElementById("wins").innerHTML = wins;
}
