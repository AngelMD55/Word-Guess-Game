//create an array
// make random selection
//make it so it can tell how many letters in each word of the array
// how many guesses left
//display "_ " for each letter


var $ = function (id) {
    return document.getElementById(id);
}

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
        "Kings landing",
        "dorne",
    ]

    var wrongLetters = [];


    // create a random city generator
    var randomChoice = Math.floor(Math.random()*westeros.length);
    var city = westeros[randomChoice];
    var myLength = city.length;

    console.log(city);
    console.log(myLength);

    
    console.log(underScore);

    // var letters = city.split(" "); ????

    //return each letter by itself

    var letters = city;
    for (var i = 0; i < city.length; i++) {
    console.log(city.charAt(i));
}

  
    var output = " ";
    var underScore = [myLength];
    


    var game = function(){
        for (var J=0; J < city.length; J++){
            underScore[J] = "_ ";
            output = output + underScore[J];
        } 
        
        document.getElementById("currentWord").innerHTML = output;
        output = " ";
}

    window.onload = function(){
        game();
    }



    var empty = []
    for (var a= 0; a < city.length; a++){
        empty.push("_")
    }
     // var under = game ()
    // console.log(under);

    var attempt = 10;
    var guess = " ";
    var counter = 0;
    
    document.onkeyup = function(event) { 
        // .indexOf (Finds if letter exist if not return -1)
        // want indexof if it exists in the word
        // if the letter is in the word replace the underscore with the letter
        // if wrong push into empty array using .push()
        // var key = city.indexOf(event.key)
        // if(city.indexOf(event.key) >= 0) {
        //     empty[key] = event.key;
            
        // }
        // console.log(output)



      // This loop replaces inputs " " if there is a " " in the array it also replaces the letter if it has been guessed correctly.
        var letters = city.split("")
        for (var b=0; b < letters.length; b++){
            if(letters[b] == " ") {
                empty[b] = " ";
            }
            if (event.key == letters[b]){
                empty[b] = event.key;
            }
        }


        document.getElementById("currentWord").innerHTML = empty.join("");

        
    }
