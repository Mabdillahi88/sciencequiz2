//selecting all required elements
// This is not my code but modified it and I have credited it  the readme file

const wordText = document.querySelector(".keywords"),
hintText = document.querySelector(".help-hint span"),
timeText = document.querySelector(".time-remaining b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".new-keyword"),
checkBtn = document.querySelector(".correct-science-word");


//selecting all required elements
// This is not my code but modified it and I have credited it  the readme file

let correctWord, timer;
const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`); // once time is up giving the correct answer
        initGame();
    }, 1000);
}
// science words are mixed up and made into random order
const initGame = () => {
    initTimer(1000);
    let randomObj = words[Math.floor(Math.random() * words.length)]; // 
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

// answers will be checked here 

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Please enter the word to check!"); // words must be enter empty space will not be allowed
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`); // answers will be checked against correct answers
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
}
refreshBtn.addEventListener("click", initGame); // event listener to refresh and pick a new random word
checkBtn.addEventListener("click", checkWord); // event listener to check answer

// This is not my code but modified it and I have credited it  the readme file
// to make nav links more responsive
function myFunction() {
    var x = document.getElementById("link-directions");
    if (x.className === "links") {
      x.className += " responsive";
    } else {
      x.className = "links";
    }
  }