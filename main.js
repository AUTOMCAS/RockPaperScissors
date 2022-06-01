const rps =["Rock", "Scissors", "Paper", "Mushroom"];


let playerScore = 0
let computerScore = 0




function computerPlay() {
    const random = Math.floor(Math.random() * 4);
    return rps[random];

}


function playRound(playerSelection) {
    computerSelection = computerPlay();
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
    console.log("Draw!");
    } else if (playerSelection==="Rock") {
        console.log("Player wins (because it cant find scissors)");
    } else if (playerSelection==="Mushroom") {
        console.log("Computer wins!")
    } else if (playerSelection==="Paper" && computerSelection==="Mushroom") {
        console.log("Player wins!")
    } else if (playerSelection==="Scissors" && computerSelection!=="Rock") {
        console.log("Player wins!")
    } else {
        console.log("Computer wins!")
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


