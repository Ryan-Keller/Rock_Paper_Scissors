/*const btn = document.querySelector('#btn');
btn.onclick = () => alert("You picked rock!");
*/

const choices = ["rock", "paper", "scissors"];
const gameHud = document.getElementById("game-hud")
let playerScore = 0;
let computerScore = 0;


function  computerPlay() {
    return choices[~~(Math.random() * choices.length)];

}





function alertFunctionRock() {
  //  alert("YAY! YOU picked Rock buddy!");
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
}




  function alertFunctionPaper() {
   //   alert("YAY! YOU picked Paper buddy!");
      let playerSelection = "paper";
      let computerSelection = computerPlay();
      playRound(playerSelection,computerSelection);
  }

  function alertFunctionScissors() {
 //     alert("YAY! YOU picked Scissors buddy!");
      let playerSelection = "scissors";
      let computerSelection = computerPlay();
      playRound(playerSelection,computerSelection);

    }

function report(playerSelection, computerSelection, playerScore, computerScore) {
    gameHud.innerHTML= `<pre>
    You chose ${playerSelection} and your opponent chose ${computerSelection}.
    The score is ${playerScore} to ${computerScore}.
    </pre>`

}

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
   //      alert("tied");
    }
        else if (computerSelection == "scissors" && playerSelection == "rock"){
            playerScore = ++playerScore;
      //          alert("You win, you now have " + playerScore + " points")
       }

       else if (computerSelection == "scissors" && playerSelection == "paper") {
            computerScore = ++computerScore;
      //          alert("You lose, computer now has " + computerScore + " points")
        }

       else if (computerSelection == "rock" && playerSelection == "scissors") {
            computerScore = ++computerScore;
        //        alert("You lose, computer now has " + computerScore + " points");

        }

        else if (computerSelection == "rock" && playerSelection == "paper"){
            playerScore = ++playerScore;
       //         alert("You win, you now have " + playerScore + " points");
       }

        else if (computerSelection == "paper" && playerSelection == "scissors"){
            playerScore = ++playerScore;
        //        alert("You win, you now have " + playerScore + " points");
       }

       else if (computerSelection == "paper" && playerSelection == "rock") {
            computerScore = ++computerScore;
        //        alert("You lose, computer now has " + computerScore + " points")
       }
       report(playerSelection, computerSelection, playerScore, computerScore);

}












 /* function game() {


    while (playerScore < 3 && computerScore < 3) {
        playerSelection = playerInput();
        computerSelection = computerPlay();


        playRound(playerSelection, computerSelection);

    }
    if (playerScore > computerScore) {
     //   alert("huzzah, you win!")
    }else {
      //  alert('boo shiesty')
    }

}*/
  // METHOD 2
 // btn.onclick = alertFunction;

  // METHOD 3
  //btn.addEventListener('click', alertFunction);
