const playerMove = document.querySelector(".player-move");
const playerLabelScore = document.querySelector(".player-score");
const computerLabelScore = document.querySelector(".computer-score");
const resultLabel = document.querySelector(".result");
let playerScore = 0;
let computerScore = 0;

function convertPlayerMove(move) {
  switch (move) {
    case "👊":
      return 0;
    case "🖐️":
      return 1;
    case "✌️":
      return 2;
  }
}

function computerChoice() {
  let res = Math.floor(Math.random() * 3);
  return res;
}

function checkResult(player, computer) {
  if (player === computer) {
    resultLabel.innerHTML = "It's a tie";
  } else if (player === 0 && computer === 1) {
    resultLabel.innerHTML = "computer wins";
    computerScore++;
  } else if (player === 1 && computer === 2) {
    resultLabel.innerHTML = "computer wins";
    computerScore++;
  } else if (player === 2 && computer === 0) {
    resultLabel.innerHTML = "computer wins";
    computerScore++;
  } else {
    resultLabel.innerHTML = "player wins";
    playerScore++;
  }
}

playerMove.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    let playerChoice = convertPlayerMove(event.target.textContent);
    let rival = computerChoice();
    checkResult(playerChoice, rival);
    playerLabelScore.innerText = playerScore;
    computerLabelScore.innerText = computerScore;
  }
});
