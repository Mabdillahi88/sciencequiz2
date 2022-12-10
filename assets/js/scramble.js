//selecting all required elements
// This is not my code but modified it and I have credited it  the readme file

const wordText = document.querySelector(".keywords"),
helpFacts = document.querySelector(".help-hint span"),
almost = document.querySelector(".time-remaining b"),
scienceTerms = document.querySelector("input"),
cleanSlate = document.querySelector(".new-keyword"),
scrambleRight = document.querySelector(".correct-science-word");


//selecting all required elements
// This is not my code but modified it and I have credited it  the readme file

let correctWord, timer;
const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return almost.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`); // once time is up giving the correct answer
        initGame();
    }, 1000);
};
// science words are mixed up and made into random order
const initGame = () => {
    initTimer(1000);
    let randomObj = words[Math.floor(Math.random() * words.length)]; // words are linked to questions and hints
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    helpFacts.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    scienceTerms.value = "";
    scienceTerms.setAttribute("maxlength", correctWord.length);
};
initGame();

// answers will be checked here 

const checkWord = () => {
    let userWord = scienceTerms.value.toLowerCase();
    if(!userWord) return alert("Please enter the word to check!"); // words must be enter empty space will not be allowed
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`); // answers will be checked against correct answers
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
};
cleanSlate.addEventListener("click", initGame); // event listener to refresh and pick a new random word
scrambleRight.addEventListener("click", checkWord); // event listener to check answer

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