const rps =["Rock", "Scissors", "Paper", "Mushroom"];
let playerScore = 0
let computerScore = 0
let winConclusion = ""

function computerPlay() {
    const random = Math.floor(Math.random() * 4);
    return rps[random];
}

function playRound(playerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
    winConclusion = "Draw, how boring."
    } else if ((playerSelection==="Rock") && (computerSelection !=="Scissors")) {
        winConclusion = "Rock is an unstoppable killing machine...";
        ++playerScore;
    } else if ((playerSelection==="Rock") && (computerSelection ==="Scissors")) {
        winConclusion = "Rock would kill Scissors but Scissors are invisible...";
        ++playerScore;
    } else if (playerSelection==="Mushroom") {
        winConclusion = "Warlocks are mushrooms...";
        ++computerScore;
    } else if (playerSelection==="Paper" && computerSelection==="Mushroom") {
        winConclusion = "Warlocks are mushrooms...";
        ++playerScore;
    } else if (playerSelection==="Scissors" && computerSelection==="Mushroom" 
    || playerSelection==="Scissors" && computerSelection==="Paper") {
        winConclusion = "Scissors are so overpowered!";
        ++playerScore;
    } else {
        winConclusion = "You lose, time to reroll...";
        ++computerScore;
    }
}
    
function game(select) {
    const playerSelection = select
    playRound(playerSelection);
    
        if (playerScore===5) {
            alert("Player wins!");
            computerScore = 0
            playerScore = 0
        } else if (computerScore===5) { 
            alert("Computer wins!");
            computerScore = 0
            playerScore = 0
        }
}


document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;

const btns = document.querySelectorAll('button');
btns.forEach (btn => btn.addEventListener('click', () => {  
game(btn.id);
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;
document.getElementById("conclusion").innerHTML = winConclusion;
}));



