//selecting all required elements
// This is not my code but modified it and I have credited it  the readme file

const facts = document.querySelector(".facts"),
assistance = document.querySelector(".assistance span"),
chances = document.querySelector(".chances span"),
incorrect = document.querySelector(".incorrect span"),
leave = document.querySelector(".leave"),
importantInformation = document.querySelector(".key-information");


let word, maxGuesses, incorrectLetters = [], correctLetters = [];

// This is not my code but modified it and I have credited it  the readme file
// the words are changed random jargon
// help is given to assistance obtaining correct answer
// letters pressed by user are displayed

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)]; // word is linked to the questions on the questions_quiz.js 
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
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
// This is not my code but modified it and I have credited it  the readme file
// the random words are checked against answers
// correct letters are highlighted and add to the empty locations

function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key; // correct letter is highlighted
                    facts.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`); // incorrect answers are recorded for user 
        }
        chances.innerText = maxGuesses; // numbers of chances are recorded
        incorrect.innerText = incorrectLetters;
    }
    importantInformation.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            alert(`YES!!! You found the word ${word.toUpperCase()}`); // correct word is highlighted to the user
            return randomWord();
        } else if(maxGuesses < 1) {
            alert("Game over! You don't have remaining guesses"); // game over is highlight for the user
            for(let i = 0; i < word.length; i++) {
                facts.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}
// This is not my code but modified it and I have credited it  the readme file
// event listener so users can pick a different random word
// event listeners can start the game by pressing any button and play the game
leave.addEventListener("click", randomWord); 
importantInformation.addEventListener("input", initGame);
facts.addEventListener("click", () => importantInformation.focus());
document.addEventListener("keydown", () => importantInformation.focus());

// to make nav links more responsive

function myFunction() {
    var x = document.getElementById("link-directions"); 
    if (x.className === "links") {
      x.className += " responsive";
    } else {
      x.className = "links";
    }
  }
