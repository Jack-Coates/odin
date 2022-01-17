function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * 3)];
    
}
function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case computerSelection:
            return "It's a tie!";
        case "rock":
            return (computerSelection === "paper")? "You lose! Paper beats rock": "You win!";
        case "paper":
            return (computerSelection === "scissors")? "You lose! Scissors beats paper":"You win!";
        case "scissors":
            return (computerSelection === "rock")?"You lose! Rock beats scissors":"You win!";
    }
}


function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    for (let i=0; i < games; i++) {
        let result = playRound(prompt("Choose Rock, Paper or Scissors").toLowerCase(), computerPlay().toLowerCase());
        console.log(result);
        
        
        (result.includes("win"))? playerCounter++:(result.includes("lose")) && computerCounter++;
        
        // {
        //     playerCounter++;
        // } else if (result.includes("lose")) {
        //     computerCounter++;
        // } else {
    }
    
    (playerCounter === computerCounter)?console.log("It's an overall tie!"):console.log((playerCounter > computerCounter)?"You won the game!":"You lost the game!");
}

const games = 5;