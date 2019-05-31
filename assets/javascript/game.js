// create all variables needed
var possibleWords = ["monkey", "leopard", "elk", "eagle", "cobra"];
var wrongGuesses = [];
var guessesRemaining = 13;
var wins = 0;
var wordsIndex = 0;
var word = "";
var letters = [];
// var userInput = 


// create a function to get a word
function getWord() {
    word =
        possibleWords[wordsIndex];
    // console.log(word);
    // // wordsIndex++;
    // console.log(wordsIndex)

    // trying to push the letters of the word into an Array, so that I can later reference that array to insert dashes on document
    // does not work.  I am lost.  I have tried googling, but all of the tutorials include more code that I don't know so I am extra lost.
    // for (var i = 0; i, word.length; i++) {
    //     letters.push(i);
    //     console.log(letters);
    // }


// below was my attempt at getting dashes printed on doc for each letter in word.  failed!
    // for (var i = 0; i < word.length; i++){
    //     document.querySelector("#word").innerHTML = "_";
    // }

}

// I really don't know what to do.  I know I need to print dashes for each letter of the chose word.  I need to read user imput and compare against letters array, then replace corresponding dash with letter.

// If user guess is wrong, I need to deduct 1 guess remaining, and add letter to letters already guessed.

// once all letters are filled in word: add 1 to wins, change photo, add 1 to wordsIndex

//press any key to play again

getWord();

