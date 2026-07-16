"use strict";

//helper function to display message
const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (messageText) {
  message.textContent = messageText;
};

//state
let score = 20;
let highScore = 0;
let secretNumber = generateSecretNumber();

// DOM Elements
const message = document.querySelector(".message");
const secretNumberEl = document.querySelector(".secret-number");
const checkButton = document.querySelector(".check-btn");
const againButton = document.querySelector(".again-btn");
const scoreValue = document.querySelector(".score-value");
const guessInput = document.querySelector(".guess-input");
const highScoreValue = document.querySelector(".highscore-value");

scoreValue.textContent = score;
highScoreValue.textContent = highScore;

// Event Listeners
checkButton.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess < 1 || guess > 20) {
    displayMessage("Number must be between 1 and 20!");
  } else if (guess === secretNumber) {
    secretNumberEl.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreValue.textContent = highScore;
    }
    displayMessage("Correct Number!");
    document.querySelector(".game").style.backgroundColor = "#60b347";
    secretNumberEl.style.width = "20rem";
  } else {
    displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
    score--;
    scoreValue.textContent = score;
  }
});

againButton.addEventListener("click", function () {
  score = 20;
  secretNumber = generateSecretNumber();
  scoreValue.textContent = score;
  highScoreValue.textContent = highScore;
  displayMessage("Start guessing...");
  secretNumberEl.textContent = "?";
  secretNumberEl.style.width = "15rem";
  guessInput.value = "";
  document.querySelector(".game").style.backgroundColor = "#222";
});
