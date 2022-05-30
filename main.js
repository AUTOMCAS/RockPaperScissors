const rps =["Rock", "Paper", "Scissors"];


let playerScore = 0
let computerScore = 0




function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    return rps[random];

}

const playerSelection = "Rock"



function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
    console.log("Draw!");
    } else if ((playerSelection==="Rock" && computerSelection==="Scissors") 
    || (playerSelection==="Paper" && computerSelection==="Rock")
    || (playerSelection==="Scissors" && computerSelection==="Paper")) {
        console.log("Player +1");

    } else {
    console.log("Computer +1");
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    playRound(playerSelection);
}



/*
function func1(func_param){
    func_param();
    console.log(func_param());

}

function func2(){
    console.log("Okay");

}

func1(func2)



function pass1(value) {
    return ("Hello " + value);
}

function pass2() {
    return (" Howdy!");
}

function receive_pass(funcA, funcB) {
    console.log(funcA("world!")+funcB());

}

receive_pass(pass1, pass2);
*/

