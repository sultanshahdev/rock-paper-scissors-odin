console.log("Hello, World!");

let humanScore=0;
let computerScore=0;

function getComputerChoice()
{
    let val=(Math.floor((Math.random()*10)))%3 ;
    if(val===0)
        return "rock";
    else if(val===1)
        return "paper";

    else if(val===2)
        return "scissors";
}

function getHumanChoice()
{
    return prompt("Choose Rock Paper Scissors");
}



function playRound()
{
    console.log("ENTER YOUR CHOICE");
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();

    if(humanChoice=="rock" || humanChoice=="ROCK")
    {
        if(computerChoice=="rock" )
            console.log("No one wins Tie!");
        else if(computerChoice=="paper" )
        {
            console.log("Computer Wins");
            computerScore++;
        }
        else if (computerChoice=="scissors" )
        {
            console.log("Player Won")
            humanScore++;
        }
    }
    else if(humanChoice=="paper" || humanChoice == "PAPER")
    {
        if(computerChoice=="rock")
            {
                console.log("Human Wins");
                humanScore++;
            }
        else if(computerChoice=="paper")
        {
            console.log("No-one Wins Tie");
        }
        else if (computerChoice=="scissors" )
        {
            console.log("Computer Wins")
            computerScore++;
        }

    }
    else if(humanChoice=="scissors" || humanChoice=="SCISSORS")
    {
         if(computerChoice=="rock" )
            {
                console.log("Computer Wins");
                computerScore++;
            }
        else if(computerChoice=="paper" )
        {
            console.log("Human Wins!");
            humanScore++;
        }
        else if (computerChoice=="scissors" )
        {
            console.log("No one wins Tie");
            
        }
        
    }
    return 1;
    
 
}
let rounds=0;
while(rounds<5)
{
    rounds+=playRound();
}

console.log("Game Summary");
console.log("COMPUTER SCORE : "+ computerScore);
console.log("HUMAN SCORE " + humanScore);

