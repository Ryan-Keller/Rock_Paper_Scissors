//Game is going to play against computer
        /*
        -rock paper scissors-
        Need three choices Rock, Paper, Scissors
        put them into and array and call them through the use of a random number generator
        if user has rock and computer has paper computer wins
        if user ha paper and computer has scissors computer wins
        if user has scissors and computer has rock computer wins : user has scissors then tie 
        */


//create function that is called "computerPlay" that will randomly return either rock paper or scissors.

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

game()

/*while (condition) {
    code
}
*/


//added the playerInupt back into the game

//need score system, when player gets a win/lose/tie we need to show that in a running count in the prompt

//game needs to be played 5 times to declare a true winner. start there and work to "best of 5" situation.
//make a function that plays game 5 times and updates the player of current score by way of prompt messages and finally an end alert once 5 wins/losses occurs and 
//ties should be infinite.








/*

        
        
Human vs Computer
            x Need Imput from Human, 1 of 3 options

        Need case insensative input from user. possible spelling forgiveness in one package (possible and word that starts with R P S)
        would like game to display "your selection of any word that starts with R,P, or S" and compare against and word taken from a dictionary that begin with R P or S.
        it should read something like rhino beats squirle. Maybe the input searches for a picture of what your word is and reutrns the first result in a box 
        and then it is vs. the computer displayed in its own box on the right.

            x Need random output from computer, 1 of 3 options

        Need to display outcomes of matches

            x two parameters: playerSelection and computerSelection

        sting declares the winner of match and explains why "You lose. Paper beats rock."



            x make computer return either rock, paper, or scissors.
*/


/*
let r = r > s;
let s = s > p;
let p = p > r;
*/








/*
function getRandomInt() {
  return Math.floor(Math.random()*3);

}



function computerPlay() {
   let choices = ["rock", "paper", "scissors"];

    //need to take random number selected and pull its position in the array.
    let num = getRandomInt();
    let compChoice = choices[num];
    console.log(compChoice);
    return compChoice
}
  
//let playerInput = prompt("Please pick either Rock, Paper, or Scissors")







const playerSelection = "rock";



 

function playRound(playerSelection, computerPlay) {


    if (computerPlay == "toast") {
        alert("you barf");
    }
    else if (computerPlay == "scissors") {
        alert("you win");
        console.log(playRound(playerSelection, computerPlay));
    }
}   





*/









/*    
switch (playRound(playerInput, computerPlay)) {
    //need to bring playInput and computerPlay on same line
    //need to compare both answers
case playerInput == "rock" && computerPlay == "paper": 
    alert("you lose")
    break;
  
case playerInput == "rock" && computerPlay == "rock":
    alert("you tie");
    break;
  
case playerInput == "rock" && computerPlay == "scissors":
    alert("you win");
    break;
} 

*/





/*

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


*/