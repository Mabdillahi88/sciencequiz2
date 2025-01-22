// Selecting all required elements
const facts = document.querySelector(".facts");
const assistance = document.querySelector(".assistance span");
const chances = document.querySelector(".chances span");
const incorrect = document.querySelector(".incorrect span");
const leave = document.querySelector(".leave");
const importantInformation = document.querySelector(".key-information");

let word, maxGuesses;
let incorrectLetters = [];
let correctLetters = [];

// Function to generate a random word
function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = [];
    incorrectLetters = [];
    assistance.innerText = ranItem.hint;
    chances.innerText = maxGuesses;
    incorrect.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text">`;
        facts.innerHTML = html;
    }
}
randomWord();


// Function to initialize the game
function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    facts.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        chances.innerText = maxGuesses;
        incorrect.innerText = incorrectLetters;
    }
    importantInformation.value = "";
}

// Function to check the game status
function checkGameStatus() {
    if(correctLetters.length === word.length) {
        alert(`YES!!! You found the word ${word.toUpperCase()}`);
        return randomWord();
    } else if(maxGuesses < 1) {
        alert("Game over! You don't have remaining guesses");
        for(let i = 0; i < word.length; i++) {
            facts.querySelectorAll("input")[i].value = word[i];
        }
    }
}


// Event listeners
leave.addEventListener("click", randomWord); 
importantInformation.addEventListener("input", initGame);
facts.addEventListener("click", () => importantInformation.focus());
document.addEventListener("keydown", () => importantInformation.focus());


// Hangman Game Initialization
let hangmanWord = ""; // The word for the hangman game
let hangmanGuesses = []; // The letters guessed in the hangman game
let hangmanMaxGuesses = 6; // The maximum number of incorrect guesses in the hangman game

// Function to start a new hangman game
function startHangmanGame() {
    hangmanWord = word; // The word for the hangman game
    hangmanGuesses = []; // Reset the letters guessed in the hangman game
    hangmanMaxGuesses = 6; // Reset the maximum number of incorrect guesses in the hangman game
    // Update the hangman game display
    updateHangmanGame();
}

// Function to make a guess in the hangman game
function hangmanGuess(letter) {
    if (hangmanWord.includes(letter)) {
        // If the letter is in the word, add it to the correct guesses
        correctLetters += letter;
    } else {
        // If the letter is not in the word, add it to the incorrect guesses and decrease the number of remaining guesses
        incorrectLetters.push(` ${letter}`);
        hangmanMaxGuesses--;
    }
    // Update the hangman game display
    updateHangmanGame();
}
