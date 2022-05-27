const rps =["Rock", "Paper", "Scissors"];
const playerSelection = "Rock"
computerSelection = " "
let playerScore = 0
let computerScore = 0


function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    computerSelection = rps[random];
}

function playRound() {
    computerPlay()
    if (playerSelection === computerSelection) {
    console.log("Draw!");
    } else if ((playerSelection==="Rock" && computerSelection==="Scissors") 
    || (playerSelection==="Paper" && computerSelection==="Rock")
    || (playerSelection==="Scissors" && computerSelection==="Paper")) {
        console.log("Player wins!");
        playerScore = ++playerScore;
        console.log(playerScore)
            if(playerScore === 5) {
                console.log("Player wins!!!")}
    } else {
    console.log("Computer wins!");
    computerScore = ++computerScore;
    console.log(computerScore)
        if(computerScore === 5) {
        console.log("Computer wins!!!")}
    }
}
