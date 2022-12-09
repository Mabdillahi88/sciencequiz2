const facts = document.querySelector(".facts"),
assistance = document.querySelector(".assistance span"),
chances = document.querySelector(".chances span"),
incorrect = document.querySelector(".incorrect span"),
leave = document.querySelector(".leave"),
importantInformation = document.querySelector(".key-information");

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    assistance.innerText = ranItem.hint;
    chances.innerText = maxGuesses;
    incorrect.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        facts.innerHTML = html;
    }
}
randomWord();

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

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            alert(`Congrats! You found the word ${word.toUpperCase()}`);
            return randomWord();
        } else if(maxGuesses < 1) {
            alert("Game over! You don't have remaining guesses");
            for(let i = 0; i < word.length; i++) {
                facts.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}

leave.addEventListener("click", randomWord);
importantInformation.addEventListener("input", initGame);
facts.addEventListener("click", () => importantInformation.focus());
document.addEventListener("keydown", () => importantInformation.focus());