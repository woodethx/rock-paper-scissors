

function getComputerChoice(){
    let rand = (Math.random())*10;
    console.log(rand);
    if(rand<3.33){
        return "rock";
    }
    else if(rand>=3.33 && rand<6.66){
        return "paper";
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Please choose rock, paper, or scissors");
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        switch (humanChoice.toLowerCase()){
            case "rock":
                switch (computerChoice){
                    case "rock":
                        return "Tie! Both chose rock.";
                    case "scissors":
                        humanScore++;
                        return "You win! Rock crushes scissors.";
                    case "paper":
                        computerScore++;
                        return "You lose! Paper covers rock.";
                }
            case "paper":
                switch (computerChoice){
                    case "rock":
                        humanScore++;
                        return "You win! Paper covers rock.";
                    case "paper":
                        return "Tie! Both chose paper.";
                    case "scissors":
                        computerScore++;
                        return "You lose! Scissors cuts paper."
                }
            case "scissors":
                switch (computerChoice){
                    case "rock":
                        computerScore++;
                        return "You lose! Rock crushes scissors.";
                    case "paper":
                        humanScore++;
                        return "You win! Scissors cuts paper."
                    case "scissors":
                        return "Tie! Both chose scissors."
                }
        }
    }
    for (let i = 0; i < 5; i++) {
    let human=getHumanChoice();
    let computer=getComputerChoice();
    console.log(playRound(human,computer));
    }
    if(humanScore>computerScore){
        return "You Win! Score: "+humanScore+"-"+computerScore;
    }
    else{
        return "You Lose! Score: "+computerScore+"-"+humanScore;
    }
}





console.log(playGame());


