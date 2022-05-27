const rps =["Rock", "Paper", "Scissors"];


function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    console.log(rps[random], random);
}

