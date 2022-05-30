const rps =["Rock", "Paper", "Scissors"];


let playerScore = 0
let computerScore = 0
let choc = 23



function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    return rps[random];

}


function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
    console.log("Draw!");
    } else if ((playerSelection==="Rock" && computerSelection==="Scissors") 
    || (playerSelection==="Paper" && computerSelection==="Rock")
    || (playerSelection==="Scissors" && computerSelection==="Paper")) {
        console.log("Player +1");
        playerScore = ++playerScore;

    } else {
    console.log("Computer +1");
    computerScore = ++computerScore;
    }
}


function game(select) {
    const playerSelection = select
    playRound(playerSelection);
    
        if (playerScore === 5) {
            console.log("Player wins!");
            computerScore = 0
            playerScore = 0
        } else if (computerScore===5) { 
            console.log("Computer wins!");
            computerScore = 0
            playerScore = 0
        }
}


