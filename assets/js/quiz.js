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
