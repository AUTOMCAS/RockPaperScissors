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
        winConclusion = "You win. Rock is an unstoppable killing machine...";
        ++playerScore;
    } else if ((playerSelection==="Rock") && (computerSelection ==="Scissors")) {
        winConclusion = "Draw. Rock would kill Scissors but Scissors are invisible...";
    } else if (playerSelection==="Mushroom") {
        winConclusion = "You loose. Warlocks are mushrooms...";
        ++computerScore;
    } else if (playerSelection==="Paper" && computerSelection==="Mushroom") {
        winConclusion = "You win. Warlocks are mushrooms...";
        ++playerScore;
    } else if (playerSelection==="Scissors" && computerSelection==="Mushroom" 
    || playerSelection==="Scissors" && computerSelection==="Paper") {
        winConclusion = "You win. Scissors are so overpowered!";
        ++playerScore;
    } else {
        winConclusion = "You lose, time to reroll...";
        ++computerScore;
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
document.getElementById("computerPick").innerHTML = computerSelection;
}));


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

