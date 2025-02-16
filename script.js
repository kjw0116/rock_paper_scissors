let humanScore = 0;
let computerScore =0;


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    
    if (computerChoice === 0){
        computerChoice = "rock";
        console.log("Computer chose rock");
        return computerChoice;
    }
    else if(computerChoice === 1) {
        computerChoice ="paper";
        console.log("Computer chose paper");
        return computerChoice;
    }
    else {
        computerChoice = "scissors";
        console.log("Computer chose scissors");
        return computerChoice;
    }
}



function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    if (humanChoice.toLowerCase() === "rock"){
        console.log(`You chose ${humanChoice}`);
        return humanChoice = "rock";
    }
    else if (humanChoice ==="paper"){
        console.log(`You chose ${humanChoice}`);
        return humanChoice = "paper";
    }

    else if (humanChoice === "scissors"){
        console.log(`You chose ${humanChoice}`);
        return humanChoice = "scissors";
    }
    else {
        console.log('pick among rock, paper, or scissors');

    }
    
}

function playRound(humanChoice, computerChoice){    
    
    
    if (humanChoice === "rock" && computerChoice === "paper"){ 
                  
            console.log("You lose! Paper beats Rock");
            return computerScore += 1;           
            
        }
    

    else if (humanChoice === computerChoice){
        console.log("It is a tie");

    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors");
        return humanScore +=1;
        }

    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! scissors beats Paper");
        return computerScore += 1; 
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock");
        return humanScore +=1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! rock beats scissors");
        return  computerScore += 1; 
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! scissors beats pape");
        return  humanScore +=1;
    }
    }

  function resetChoices(){
    console.log(`your score: ${humanScore} , computer score: ${computerScore}`);
    
  }

    
    
    function playGame(){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        resetChoices();
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        resetChoices();
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        resetChoices();
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        resetChoices();
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        resetChoices();

    }