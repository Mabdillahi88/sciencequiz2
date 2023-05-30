// Hangman words
const hangmanWords = ['science', 'experiment', 'chemistry', 'biology', 'physics'];
let hangmanWord = '';
let hangmanGuesses = [];
let hangmanWrongGuesses = 0;

// Function to start a new Hangman game
function newHangmanGame() {
    hangmanWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    hangmanGuesses = Array(hangmanWord.length).fill('_');
    hangmanWrongGuesses = 0;
    updateHangmanGame();
}

// Function to handle a Hangman guess
function hangmanGuess(letter) {
    if (hangmanWord.includes(letter)) {
        for (let i = 0; i < hangmanWord.length; i++) {
            if (hangmanWord[i] === letter) {
                hangmanGuesses[i] = letter;
            }
        }
    } else {
        hangmanWrongGuesses++;
    }
    updateHangmanGame();
}

// Function to update the Hangman game display
function updateHangmanGame() {
    document.getElementById('wordSpotlight').textContent = hangmanGuesses.join(' ');
    document.getElementById('hangmanStatus').textContent = `Wrong guesses: ${hangmanWrongGuesses}`;
    if (!hangmanGuesses.includes('_')) {
        alert('You won the Hangman game!');
        newHangmanGame();
    } else if (hangmanWrongGuesses >= 6) {
        alert('You lost the Hangman game!');
        newHangmanGame();
    }
}

// Start a new Hangman game when the page loads
newHangmanGame();
