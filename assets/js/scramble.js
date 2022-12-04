const wordText = document.querySelector(".keywords"),
hintText = document.querySelector(".help-hint span"),
timeText = document.querySelector(".time-remaining b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".new-keyword"),
checkBtn = document.querySelector(".correct-science-word");

let correctWord, timer;
const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}