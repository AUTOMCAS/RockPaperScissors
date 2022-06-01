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
        ++playerScore;
    } else if (playerSelection==="Mushroom") {
        console.log("Computer wins!");
        ++computerScore;
    } else if ((playerSelection==="Paper" && computerSelection==="Mushroom") 
    || (playerSelection==="Scissors" && computerSelection!=="Rock")) {
        console.log("Player wins!");
        ++playerScore;
    } else {
        console.log("Computer wins!");
        ++computerScore;
    }
}
    
function game(select) {
    const playerSelection = select
    playRound(playerSelection);
    
        if (playerScore === 5) {
            alert("Player wins!");
            computerScore = 0
            playerScore = 0
        } else if (computerScore===5) { 
            alert("Computer wins!");
            computerScore = 0
            playerScore = 0
        }
}

const btns = document.querySelectorAll('button');
btns.forEach (btn => btn.addEventListener('click', () => {  
game(btn.id);
}));

