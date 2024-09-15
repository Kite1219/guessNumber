"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = "888";
document.querySelector(".score").textContent = "999";
document.querySelector(".guess").value = 22;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  const scoreDisplay = document.querySelector(".score");
  const resultNumber = document.querySelector(".number");
  // console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("😪 No Number");
  } else if (guess === secretNumber) {
    //When player wins
    displayMessage("👍Correct Number!");
    // document.querySelector(".message").textContent = "👍Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    resultNumber.style.width = "30rem";
    resultNumber.textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      // message.textContent =
      // guess > secretNumber ? "Too high! 📈" : "Too low! 📉";
      displayMessage(guess > secretNumber ? "Too high! 📈" : "Too low! 📉");
      scoreDisplay.textContent = score;
    } else {
      displayMessage("You lost the game!!!");
      // message.textContent = "You lost the game!!!";
      scoreDisplay.textContent = 0;
    }
  }
  //   } else if (guess > secretNumber) {
  //     //Too high
  //     if (score > 1) {
  //       score--;
  //       message.textContent = "Too high! 📈";
  //       scoreDisplay.textContent = score;
  //     } else {
  //       message.textContent = "You lost the game!!!";
  //       scoreDisplay.textContent = 0;
  //     }
  //     //Too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       message.textContent = "Too low! 📉";
  //       score--;
  //       scoreDisplay.textContent = score;
  //     } else {
  //       message.textContent = "You lost the game!!!";
  //       scoreDisplay.textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  // document.querySelector(".message").textContent = "Start guessing...";
  score = 20;

  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
