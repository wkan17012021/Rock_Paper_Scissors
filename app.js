let playerRock = document.getElementById("rockIconPlayer");
let computerRock = document.getElementById("rockIconComputer");
let playerPaper = document.getElementById("paperIconPlayer");
let computerPaper = document.getElementById("paperIconComputer");
let playerScissors = document.getElementById("scissorsIconPlayer");
let computerScissors = document.getElementById("scissorsIconComputer");
let playerScissors2 = document.getElementById("scissorsIcon2Player");

let grabMessage = document.getElementById("message");
let playerCount = 0;
let computerCount = 0;
let grabPlayerScore = document.querySelector(".player h2");
let grabComputerScore = document.querySelector(".computer h2");

//// conditions if the rock button is pressed /////////

playerRock.addEventListener("click", function () {
  playerPaper.style.display = "none";
  playerScissors.style.display = "none";
  playerScissors2.style.display = "none";
  grabMessage.innerText = "";
  let playerGuessRock = "rock"; // 0 = rock;
  let randomNumber = Math.floor(Math.random() * 3);
  // generate random number: 0 || 1 || 2 which will be the computer options for r \ p \ sc
  if (randomNumber == 0) {
    computerPaper.style.display = "none";
    computerScissors.style.display = "none";
    let computerChoice = "rock";
    grabMessage.innerText = `You chose ${playerGuessRock}, the computer chose ${computerChoice}, it's a tie.`;
  } else if (randomNumber == 1) {
    computerRock.style.display = "none";
    computerScissors.style.display = "none";
    let computerChoice = "paper";
    computerCount += 1;
    grabComputerScore.innerText = computerCount;
    grabMessage.innerText = `You chose ${playerGuessRock}, the computer chose ${computerChoice}. Sorry, you lose.`;
  } else if (randomNumber == 2) {
    computerRock.style.display = "none";
    computerPaper.style.display = "none";
    let computerChoice = "scissors";
    playerCount += 1;
    grabPlayerScore.innerText = playerCount;
    grabMessage.innerText = `You chose ${playerGuessRock}, the computer chose ${computerChoice}. You Win!`;
  }
});
//// conditions if the paper button is pressed /////////

playerPaper.addEventListener("click", function () {
  playerRock.style.display = "none";
  playerScissors.style.display = "none";
  playerScissors2.style.display = "none";
  grabMessage.innerText = "";
  let playerGuessPaper = "paper"; // 0 = rock;
  let randomNumber = Math.floor(Math.random() * 3);
  // generate random number: 0 || 1 || 2 which will be the computer options for r \ p \ sc
  if (randomNumber == 0) {
    computerPaper.style.display = "none";
    computerScissors.style.display = "none";
    let computerChoice = "rock";
    playerCount += 1;
    grabPlayerScore.innerText = playerCount;
    grabMessage.innerText = `You chose ${playerGuessPaper}, the computer chose ${computerChoice}. You Win!`;
  } else if (randomNumber == 1) {
    computerRock.style.display = "none";
    computerScissors.style.display = "none";
    let computerChoice = "paper";
    grabMessage.innerText = `You chose ${playerGuessPaper}, the computer chose ${computerChoice}, it's a tie.`;
  } else if (randomNumber == 2) {
    computerRock.style.display = "none";
    computerPaper.style.display = "none";
    let computerChoice = "scissors";
    computerCount += 1;
    grabComputerScore.innerText = computerCount;
    grabMessage.innerText = `You chose ${playerGuessPaper}, the computer chose ${computerChoice}. Sorry, you lose.`;
  }
});
//// conditions if the scissors button is pressed /////////

playerScissors.addEventListener("click", function () {
  playerRock.style.display = "none";
  playerPaper.style.display = "none";
  playerScissors.style.display = "none";
  grabMessage.innerText = "";
  let playerGuessScissors = "scissors"; // 0 = rock;
  let randomNumber = Math.floor(Math.random() * 3);
  // generate random number: 0 || 1 || 2 which will be the computer options for r \ p \ sc
  if (randomNumber == 0) {
    computerPaper.style.display = "none";
    computerScissors.style.display = "none";
    let computerChoice = "rock";
    computerCount += 1;
    grabComputerScore.innerText = computerCount;
    grabMessage.innerText = `You chose ${playerGuessScissors}, the computer chose ${computerChoice}. Sorry, you lose.`;
  } else if (randomNumber == 1) {
    computerRock.style.display = "none";
    computerScissors.style.display = "none";
    let computerChoice = "paper";
    playerCount += 1;
    grabPlayerScore.innerText = playerCount;
    grabMessage.innerText = `You chose ${playerGuessScissors}, the computer chose ${computerChoice}. You Win!`;
  } else if (randomNumber == 2) {
    computerRock.style.display = "none";
    computerPaper.style.display = "none";
    let computerChoice = "scissors";
    grabMessage.innerText = `You chose ${playerGuessScissors}, the computer chose ${computerChoice}, it's a tie.`;
  }
});

let resetButton = document.getElementById("restart");
resetButton.addEventListener("click", function () {
  playerRock.style.display = "block";
  playerPaper.style.display = "block";
  playerScissors.style.display = "block";
  playerScissors2.style.display = "block";
  computerRock.style.display = "block";
  computerPaper.style.display = "block";
  computerScissors.style.display = "block";
});
///////this code is for the original game as alert prompts ////////
//let playerScore = document.
//Player has ${playerCount} points, computer has ${computerCount} points.
/*
function startGame() {
  let gameStart = prompt("Play the game?");
  if (gameStart.toLowerCase() === "yes" || gameStart.toLowerCase() === "y") {
    alert(
      `Let's play rock, paper, scissors! Player has ${playerCount} points, computer has ${computerCount} points.`
    );

    let playerGuess1 = prompt("Rock, Paper or Scissors?");
    let lowerCaseplayerGuess1 = playerGuess1.toLowerCase(); // the players guess has been assigned to a string.
    console.log("The players guess was " + lowerCaseplayerGuess1);
    // generate random number: 0 || 1 || 2 which will be the computer options for r \ p \ sc
    let randomNumber = Math.floor(Math.random() * 3);
    // assign 0 = rock ; 1 = paper ; 2 = scissors.
    let computerChoice = "";
    if (randomNumber == 0) {
      console.log("it was 0"); // print this to test the outcomes
      let computerChoice = "rock";
      console.log(computerChoice); // print this to test the outcomes
      // this compares the computers choice with the players choice.

      if (lowerCaseplayerGuess1 == computerChoice) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, it's a tie.`
        );
        startGame();
      } else if (
        lowerCaseplayerGuess1 == "rock" &&
        computerChoice == "scissors"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
        );
        playerCount += 1;
        alert(`The player score is ${playerCount}`);
        startGame();
        return playerCount;
      } else if (lowerCaseplayerGuess1 == "rock" && computerChoice == "paper") {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
        );
        computerCount += 1;
        alert(`The computer score is ${computerCount}`);
        startGame();
        return computerCount;
      } else if (lowerCaseplayerGuess1 == "paper" && computerChoice == "rock") {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
        );
        playerCount += 1;
        alert(`The player score is ${playerCount}`);
        startGame();
        return playerCount;
      } else if (
        lowerCaseplayerGuess1 == "paper" &&
        computerChoice == "scissors"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
        );
        computerCount += 1;
        alert(`The computer score is ${computerCount}`);
        startGame();
        return computerCount;
      } else if (
        lowerCaseplayerGuess1 == "scissors" &&
        computerChoice == "paper"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
        );
        playerCount += 1;
        alert(`The player score is ${playerCount}`);
        startGame();
        return playerCount;
      } else if (
        lowerCaseplayerGuess1 == "scissors" &&
        computerChoice == "rock"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
        );
        computerCount += 1;
        alert(`The computer score is ${computerCount}`);
        startGame();
        return computerCount;
      }
      // apply the same logic but now 1 = paper
    } else if (randomNumber == 1) {
      console.log("it was 1");
      let computerChoice = "paper";
      console.log(computerChoice);
      if (lowerCaseplayerGuess1 == computerChoice) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, it's a tie.`
        );
        startGame();
      } else if (
        lowerCaseplayerGuess1 == "rock" &&
        computerChoice == "scissors"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
        );
        playerCount += 1;
        alert(`The player score is ${playerCount}`);
        startGame();
        return playerCount;
      } else if (lowerCaseplayerGuess1 == "rock" && computerChoice == "paper") {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
        );
        computerCount += 1;
        alert(`The computer score is ${computerCount}`);
        startGame();
        return computerCount;
      } else if (lowerCaseplayerGuess1 == "paper" && computerChoice == "rock") {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
        );
        playerCount += 1;
        alert(`The player score is ${playerCount}`);
        startGame();
        return playerCount;
      } else if (
        lowerCaseplayerGuess1 == "paper" &&
        computerChoice == "scissors"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
        );
        computerCount += 1;
        alert(`The computer score is ${computerCount}`);
        startGame();
        return computerCount;
      } else if (
        lowerCaseplayerGuess1 == "scissors" &&
        computerChoice == "paper"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
        );
        playerCount += 1;
        alert(`The player score is ${playerCount}`);
        startGame();
        return playerCount;
      } else if (
        lowerCaseplayerGuess1 == "scissors" &&
        computerChoice == "rock"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
        );
        computerCount += 1;
        alert(`The computer score is ${computerCount}`);
        startGame();
        return computerCount;
      }
      // apply the same logic but now 2 = scissors
    } else if (randomNumber == 2) {
      console.log("it was 2");
      let computerChoice = "scissors";
      console.log(computerChoice);
      if (lowerCaseplayerGuess1 == computerChoice) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, it's a tie.`
        );
        startGame();
      } else if (
        lowerCaseplayerGuess1 == "rock" &&
        computerChoice == "scissors"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
        );
        playerCount += 1;
        alert(`The player score is ${playerCount}`);
        startGame();
        return playerCount;
      } else if (lowerCaseplayerGuess1 == "rock" && computerChoice == "paper") {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
        );
        computerCount += 1;
        alert(`The computer score is ${computerCount}`);
        startGame();
        return computerCount;
      } else if (lowerCaseplayerGuess1 == "paper" && computerChoice == "rock") {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
        );
        playerCount += 1;
        alert(`The player score is ${playerCount}`);
        startGame();
        return playerCount;
      } else if (
        lowerCaseplayerGuess1 == "paper" &&
        computerChoice == "scissors"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
        );
        computerCount += 1;
        alert(`The computer score is ${computerCount}`);
        startGame();
        return computerCount;
      } else if (
        lowerCaseplayerGuess1 == "scissors" &&
        computerChoice == "paper"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
        );
        playerCount += 1;
        alert(`The player score is ${playerCount}`);
        startGame();
        return playerCount;
      } else if (
        lowerCaseplayerGuess1 == "scissors" &&
        computerChoice == "rock"
      ) {
        alert(
          `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
        );
        computerCount += 1;
        alert(`The computer score is ${computerCount}`);
        startGame();
        return computerCount;
      }
    } else if (
      lowerCaseplayerGuess1 != "rock" ||
      lowerCaseplayerGuess1 != "paper" ||
      lowerCaseplayerGuess1 != "scissors"
    ) {
      alert("Neither rock, paper or scissors were entered.");
    } else gameStart.toLowerCase() != "yes" || gameStart.toLowerCase() != "y";
    alert(
      "Neither rock, paper nor scissors were entered. You have exited the game."
    );
  }
}
startGame();
*/

//   if (gameStart.toLowerCase() === "yes" || gameStart.toLowerCase() === "y") {
//     alert(
//       `Let's play rock, paper, scissors! Player has ${playerCount} points, computer has ${computerCount} points.`
//     );

//     let playerGuess1 = prompt("Rock, Paper or Scissors?");
//     let lowerCaseplayerGuess1 = playerGuess1.toLowerCase(); // the players guess has been assigned to a string.
//     console.log("The players guess was " + lowerCaseplayerGuess1);
//     // generate random number: 0 || 1 || 2 which will be the computer options for r \ p \ sc
//     let randomNumber = Math.floor(Math.random() * 3);
//     // assign 0 = rock ; 1 = paper ; 2 = scissors.
//     let computerChoice = "";
//     if (randomNumber == 0) {
//       console.log("it was 0"); // print this to test the outcomes
//       let computerChoice = "rock";
//       console.log(computerChoice); // print this to test the outcomes
//       // this compares the computers choice with the players choice.

//       if (lowerCaseplayerGuess1 == computerChoice) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, it's a tie.`
//         );
//         startGame();
//       } else if (
//         lowerCaseplayerGuess1 == "rock" &&
//         computerChoice == "scissors"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
//         );
//         playerCount += 1;
//         alert(`The player score is ${playerCount}`);
//         startGame();
//         return playerCount;
//       } else if (lowerCaseplayerGuess1 == "rock" && computerChoice == "paper") {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
//         );
//         computerCount += 1;
//         alert(`The computer score is ${computerCount}`);
//         startGame();
//         return computerCount;
//       } else if (lowerCaseplayerGuess1 == "paper" && computerChoice == "rock") {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
//         );
//         playerCount += 1;
//         alert(`The player score is ${playerCount}`);
//         startGame();
//         return playerCount;
//       } else if (
//         lowerCaseplayerGuess1 == "paper" &&
//         computerChoice == "scissors"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
//         );
//         computerCount += 1;
//         alert(`The computer score is ${computerCount}`);
//         startGame();
//         return computerCount;
//       } else if (
//         lowerCaseplayerGuess1 == "scissors" &&
//         computerChoice == "paper"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
//         );
//         playerCount += 1;
//         alert(`The player score is ${playerCount}`);
//         startGame();
//         return playerCount;
//       } else if (
//         lowerCaseplayerGuess1 == "scissors" &&
//         computerChoice == "rock"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
//         );
//         computerCount += 1;
//         alert(`The computer score is ${computerCount}`);
//         startGame();
//         return computerCount;
//       }
//       // apply the same logic but now 1 = paper
//     } else if (randomNumber == 1) {
//       console.log("it was 1");
//       let computerChoice = "paper";
//       console.log(computerChoice);
//       if (lowerCaseplayerGuess1 == computerChoice) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, it's a tie.`
//         );
//         startGame();
//       } else if (
//         lowerCaseplayerGuess1 == "rock" &&
//         computerChoice == "scissors"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
//         );
//         playerCount += 1;
//         alert(`The player score is ${playerCount}`);
//         startGame();
//         return playerCount;
//       } else if (lowerCaseplayerGuess1 == "rock" && computerChoice == "paper") {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
//         );
//         computerCount += 1;
//         alert(`The computer score is ${computerCount}`);
//         startGame();
//         return computerCount;
//       } else if (lowerCaseplayerGuess1 == "paper" && computerChoice == "rock") {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
//         );
//         playerCount += 1;
//         alert(`The player score is ${playerCount}`);
//         startGame();
//         return playerCount;
//       } else if (
//         lowerCaseplayerGuess1 == "paper" &&
//         computerChoice == "scissors"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
//         );
//         computerCount += 1;
//         alert(`The computer score is ${computerCount}`);
//         startGame();
//         return computerCount;
//       } else if (
//         lowerCaseplayerGuess1 == "scissors" &&
//         computerChoice == "paper"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
//         );
//         playerCount += 1;
//         alert(`The player score is ${playerCount}`);
//         startGame();
//         return playerCount;
//       } else if (
//         lowerCaseplayerGuess1 == "scissors" &&
//         computerChoice == "rock"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
//         );
//         computerCount += 1;
//         alert(`The computer score is ${computerCount}`);
//         startGame();
//         return computerCount;
//       }
//       // apply the same logic but now 2 = scissors
//     } else if (randomNumber == 2) {
//       console.log("it was 2");
//       let computerChoice = "scissors";
//       console.log(computerChoice);
//       if (lowerCaseplayerGuess1 == computerChoice) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, it's a tie.`
//         );
//         startGame();
//       } else if (
//         lowerCaseplayerGuess1 == "rock" &&
//         computerChoice == "scissors"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
//         );
//         playerCount += 1;
//         alert(`The player score is ${playerCount}`);
//         startGame();
//         return playerCount;
//       } else if (lowerCaseplayerGuess1 == "rock" && computerChoice == "paper") {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
//         );
//         computerCount += 1;
//         alert(`The computer score is ${computerCount}`);
//         startGame();
//         return computerCount;
//       } else if (lowerCaseplayerGuess1 == "paper" && computerChoice == "rock") {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
//         );
//         playerCount += 1;
//         alert(`The player score is ${playerCount}`);
//         startGame();
//         return playerCount;
//       } else if (
//         lowerCaseplayerGuess1 == "paper" &&
//         computerChoice == "scissors"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
//         );
//         computerCount += 1;
//         alert(`The computer score is ${computerCount}`);
//         startGame();
//         return computerCount;
//       } else if (
//         lowerCaseplayerGuess1 == "scissors" &&
//         computerChoice == "paper"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you win.`
//         );
//         playerCount += 1;
//         alert(`The player score is ${playerCount}`);
//         startGame();
//         return playerCount;
//       } else if (
//         lowerCaseplayerGuess1 == "scissors" &&
//         computerChoice == "rock"
//       ) {
//         alert(
//           `You chose ${lowerCaseplayerGuess1}, the computer chose ${computerChoice}, you lose.`
//         );
//         computerCount += 1;
//         alert(`The computer score is ${computerCount}`);
//         startGame();
//         return computerCount;
//       }
//     } else if (
//       lowerCaseplayerGuess1 != "rock" ||
//       lowerCaseplayerGuess1 != "paper" ||
//       lowerCaseplayerGuess1 != "scissors"
//     ) {
//       alert("Neither rock, paper or scissors were entered.");
//     } else gameStart.toLowerCase() != "yes" || gameStart.toLowerCase() != "y";
//     alert(
//       "Neither rock, paper nor scissors were entered. You have exited the game."
//     );
//   }
// }
