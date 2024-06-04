import {
  startConfetti,
  stopConfetti,
  removeConfetti,
} from "./modules/confetti.js";

const gameControls = document.querySelectorAll(".btn__medium");
const controls = document.querySelector(".game__controls");
const gameBoard = document.querySelector(".game__board");
const modalPopUp = document.querySelector(".modal");
const rulesBtn = document.querySelector(".btn-rules");
const closeBtn = document.querySelector(".btn-close");

let SCORE = 0;

const posibleSelections = {
  rock: "./images/icon-rock.svg",
  paper: "./images/icon-paper.svg",
  scissors: "./images/icon-scissors.svg",
  lizard: "./images/icon-lizard.svg",
  spock: "./images/icon-spock.svg",
};

const setDecision = (decision) => {
  document.querySelector(".decision").innerText = decision;
};

const setScore = (newScore) => {
  SCORE = newScore;
  if (newScore < 0) {
    return;
    SCORE = 0;
  }
  if (newScore <= 9) {
    newScore = `0${newScore}`;
  } else {
    newScore = newScore;
  }
  document.querySelector(".header__score-large").innerText = newScore;
};

const decideWin = (userSelection, computerSelection) => {
  if (userSelection == "paper" && computerSelection == "scissors") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userSelection == "paper" && computerSelection == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "paper" && computerSelection == "paper") {
    setDecision("It's a tie!");
  }
  if (userSelection == "rock" && computerSelection == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "lizard" && computerSelection == "spock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "spock" && computerSelection == "lizard") {
    setDecision("YOU loose!");
    setScore(SCORE - 1);
  }
  if (userSelection == "lizard" && computerSelection == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "paper" && computerSelection == "lizard") {
    setDecision("YOU loose!");
    setScore(SCORE - 1);
  }
  if (userSelection == "scissors" && computerSelection == "lizard") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "lizard" && computerSelection == "scissors") {
    setDecision("YOU loose!");
    setScore(SCORE - 1);
  }
  if (userSelection == "paper" && computerSelection == "spock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "spock" && computerSelection == "paper") {
    setDecision("YOU loose!");
    setScore(SCORE - 1);
  }
  if (userSelection == "spock" && computerSelection == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "scissors" && computerSelection == "spock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "spock" && computerSelection == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "rock" && computerSelection == "spock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "spock" && computerSelection == "spock") {
    setDecision("IT'S A TIE!");
  }
  if (userSelection == "lizard" && computerSelection == "lizard") {
    setDecision("IT'S A TIE!");
  }
  if (userSelection == "rock" && computerSelection == "paper") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userSelection == "rock" && computerSelection == "rock") {
    setDecision("It's a tie!");
  }
  if (userSelection == "rock" && computerSelection == "lizard") {
    setDecision("you win!");
    setScore(SCORE + 1);
    startConfetti();
  }
  if (userSelection == "scissors" && computerSelection == "scissors") {
    setDecision("It's a tie!");
  }
  if (userSelection == "scissors" && computerSelection == "rock") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userSelection == "scissors" && computerSelection == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    startConfetti();
  }
};

const displayChoices = () => {};

gameControls.forEach((btn) => {
  btn.addEventListener("click", () => {
    let choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const container = document.createElement("div");
    container.classList.add("game-board-container");
    const userChoice = document.createElement("div");
    userChoice.classList.add("user__choice");
    const userText = document.createElement("p");
    userText.textContent = "you picked";
    userText.classList.add("user__choice-display");
    const userChoiceImage = document.createElement("div");
    userChoiceImage.classList.add("user__choice-image");
    userChoiceImage.classList.add(`${btn.textContent}`);
    const userImage = document.createElement("img");
    userImage.src = `${posibleSelections[`${btn.textContent}`]}`;
    userChoiceImage.appendChild(userImage);
    userChoice.appendChild(userText);
    userChoice.appendChild(userChoiceImage);

    const showResult = document.createElement("div");
    showResult.classList.add("referee");
    const result = document.createElement("h1");
    result.classList.add("decision");
    const resetBtn = document.createElement("button");
    resetBtn.classList.add("btn");
    resetBtn.classList.add("btn-restart");
    resetBtn.innerText = "PLAY AGAIN";
    showResult.appendChild(result);
    showResult.appendChild(resetBtn);
    showResult.appendChild(result);
    showResult.appendChild(resetBtn);

    const computerSelection = document.createElement("div");
    computerSelection.classList.add("computer__choice");
    const computerText = document.createElement("p");
    computerText.textContent = "the house picked";
    computerText.classList.add("computer__choice-display");
    const computerSelectionImage = document.createElement("div");
    computerSelectionImage.classList.add("computer__choice-image");
    computerSelectionImage.classList.add(`${computerChoice}`);
    const computerImage = document.createElement("img");
    computerImage.src = `${posibleSelections[computerChoice]}`;
    computerSelectionImage.appendChild(computerImage);
    computerSelection.appendChild(computerText);
    computerSelection.appendChild(computerSelectionImage);

    container.appendChild(userChoice);
    container.appendChild(showResult);
    container.appendChild(computerSelection);
    gameBoard.append(container);

    resetBtn.addEventListener("click", () => {
      gameBoard.style.visibility = "hidden";
      gameBoard.removeChild(container);
      setTimeout(() => {
        controls.style.display = "block";
      }, 200);
    });

    controls.style.display = "none";
    gameBoard.style.visibility = "visible";

    decideWin(`${btn.textContent}`, computerChoice);
  });
});

rulesBtn.addEventListener("click", () => {
  modalPopUp.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modalPopUp.classList.remove("show");
});
