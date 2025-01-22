document.addEventListener("DOMContentLoaded", () => {
  // Science True or False Game

  // Question Bank (Updated to 20 Questions)
  const questions = [
    { question: "The Earth revolves around the Sun.", answer: true },
    { question: "Water boils at 50°C.", answer: false },
    { question: "Plants produce oxygen during photosynthesis.", answer: true },
    { question: "The human body has 206 bones.", answer: true },
    { question: "Light travels slower than sound.", answer: false },
    { question: "The symbol for gold is Ag.", answer: false },
    { question: "Diamonds are made of carbon.", answer: true },
    { question: "The Great Wall of China is visible from space.", answer: false },
    { question: "The speed of light is approximately 300,000 km/s.", answer: true },
    { question: "Humans share 50% of their DNA with bananas.", answer: true },
    { question: "Sharks are mammals.", answer: false },
    { question: "Venus is the hottest planet in our solar system.", answer: true },
    { question: "Sound travels faster in air than in water.", answer: false },
    { question: "The human brain is fully developed at birth.", answer: false },
    { question: "The Eiffel Tower can grow taller during summer.", answer: true },
    { question: "Antarctica is the driest place on Earth.", answer: true },
    { question: "Bats are blind.", answer: false },
    { question: "There are more stars in the universe than grains of sand on Earth.", answer: true },
    { question: "Penguins can fly.", answer: false },
    { question: "Octopuses have three hearts.", answer: true },
  ];

  // Game State
  let currentQuestionIndex = 0;
  let score = 0;
  let timer = 30;
  let countdown;
  let gameOver = false; // Flag to prevent multiple endGame calls
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // DOM Elements
  const gameContainer = document.getElementById("game-container");
  const welcomeContainer = document.getElementById("welcome-container");
  const playButton = document.getElementById("play-button");
  const questionElement = document.getElementById("question");
  const trueButton = document.getElementById("true-button");
  const falseButton = document.getElementById("false-button");
  const scoreDisplay = document.getElementById("score");
  const timerDisplay = document.getElementById("timer");
  const resultElement = document.getElementById("result");
  const restartButton = document.getElementById("restart-button");

  // Start Game on Button Click
  playButton.addEventListener("click", () => {
    welcomeContainer.style.display = "none";
    gameContainer.style.display = "block";
    startGame();
  });

  // Start Game
  function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    timer = 30;
    gameOver = false; // Reset game-over flag
    resultElement.textContent = "";
    restartButton.style.display = "none";
    trueButton.style.display = "inline-block";
    falseButton.style.display = "inline-block";
    updateScore();
    startTimer();
    loadQuestion();
  }

  // Load a New Question
  function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
    } else {
      endGame();
    }
  }

  // Handle User Answer
  function handleAnswer(isTrue) {
    const currentQuestion = questions[currentQuestionIndex];
    if (isTrue === currentQuestion.answer) {
      score++;
      resultElement.textContent = "Correct!";
      timer += 5; // Add bonus time for correct answers
    } else {
      resultElement.textContent = "Wrong!";
      timer -= 5; // Deduct time for wrong answers
    }
    updateScore();
    currentQuestionIndex++;
    setTimeout(() => {
      resultElement.textContent = "";
      loadQuestion();
    }, 1000);
  }

  // Update Score Display
  function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
  }

  // Start Timer
  function startTimer() {
    clearInterval(countdown);
    timerDisplay.textContent = `Time: ${timer}s`;
    countdown = setInterval(() => {
      timer--;
      timerDisplay.textContent = `Time: ${timer}s`;
      if (timer <= 0) {
        clearInterval(countdown);
        endGame();
      }
    }, 1000);
  }

  // End Game
  function endGame() {
    if (gameOver) return; // Prevent multiple executions
    gameOver = true; // Set the flag to true
    questionElement.textContent = `Game Over! Your score is ${score}.`;
    trueButton.style.display = "none";
    falseButton.style.display = "none";
    restartButton.style.display = "block";
    saveScore();
  }

  // Save Score to Local Storage
  function saveScore() {
    const playerName = prompt("Enter your name for the leaderboard:");
    if (playerName) {
      highScores.push({ name: playerName, score });
      highScores.sort((a, b) => b.score - a.score); // Sort by highest score
      highScores = highScores.slice(0, 5); // Keep top 5 scores
      localStorage.setItem("highScores", JSON.stringify(highScores)); // Save to localStorage
    }
  }

  // Restart Game
  restartButton.addEventListener("click", () => {
    startGame();
  });

  // Event Listeners for Answer Buttons
  trueButton.addEventListener("click", () => handleAnswer(true));
  falseButton.addEventListener("click", () => handleAnswer(false));
});
