
const choices = ["rock", "paper", "scissors"];
//let playerSelection = playerInput().toLowerCase();
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;


function playerInput() {
    str = prompt("What do you choose? rock, paper, or scissors?")
        return str
}




function  computerPlay() {
        return choices[~~(Math.random() * choices.length)];
        
    }


// write a function that plays a single round of "RPS"
// flush out the playRound() to take account for all game outcomes 


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
         alert("tied");
    }   
        else if (computerSelection == "scissors" && playerSelection == "rock"){
            playerScore = ++playerScore;
                alert("You win, you now have " + playerScore + " points")
       }
        
       else if (computerSelection == "scissors" && playerSelection == "paper") {
            computerScore = ++computerScore;
                alert("You lose, computer now has " + computerScore + " points")
        }
              
       else if (computerSelection == "rock" && playerSelection == "scissors") {
            computerScore = ++computerScore;
                alert("You lose, computer now has " + computerScore + " points");

        }
        
        else if (computerSelection == "rock" && playerSelection == "paper"){
            playerScore = ++playerScore;    
                alert("You win, you now have " + playerScore + " points");
       }

        else if (computerSelection == "paper" && playerSelection == "scissors"){
            playerScore = ++playerScore;
                alert("You win, you now have " + playerScore + " points");
       }
       
       else if (computerSelection == "paper" && playerSelection == "rock") {
            computerScore = ++computerScore;
                alert("You lose, computer now has " + computerScore + " points")
       }

       
}   

 //console.log(playRound(playerSelection, computerSelection))

function game() {

        
    while (playerScore < 3 && computerScore < 3) {
        playerSelection = playerInput();
        computerSelection = computerPlay();

    
        playRound(playerSelection, computerSelection);

    }
    if (playerScore > computerScore) {
        alert("huzzah, you win!")
    }else {
        alert('boo shiesty')
    }

}

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


game()

