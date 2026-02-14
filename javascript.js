console.log("Hello, World!");

let playerScore=0;
let computerScore=0;
let rockButton=document.querySelector(".rock");

let paperButton=document.querySelector(".paper");

let scissorButton=document.querySelector(".scissors");

rockButton.addEventListener('click',playRound);

paperButton.addEventListener('click',playRound);

scissorButton.addEventListener('click',playRound);
let wingMsg=document.getElementById("win-msg");
let computerScoreMsg=document.getElementById("computer-score");
let playerScoreMsg=document.getElementById("player-score");

function getComputerChoice()
{
    let val=(Math.floor((Math.random()*10)))%3 ;
    return val;
}


function updateScoreBoard()
{
    computerScoreMsg.textContent=`COMPUTER SCORE :${computerScore}`;
    playerScoreMsg.textContent=`PLAYER SCORE :${playerScore}`;
}
function increaseComputerScore()
{
    computerScore++;
}
function increasePlayerScore()
{
    playerScore++;
}
function declarePlayerWinner()
{
    wingMsg.textContent=`YOU WON BRUH/GAL`;
}
function declareComputerWinner()
{
    wingMsg.textContent=`COMPUTER WON`;
}
function showTie()
{
    wingMsg.textContent=`TIE ~`;
}


function updateStatsForComputer()
{
    declareComputerWinner();
    increaseComputerScore();
    updateScoreBoard();
}

function updateStatForPlayer()
{
    declarePlayerWinner();
    increasePlayerScore();
    updateScoreBoard();
}


function playRound(e)
{
    humanChoice=e.target.parentElement;
    console.log(humanChoice);
    console.log(rockButton);
    computerChoice=getComputerChoice();
    if(humanChoice==rockButton)
    {
        if(computerChoice==0)
        {
           showTie();
        }
        else if(computerChoice==1)
        {   
            updateStatsForComputer();
        }
        else if(computerChoice==2)
        {
            updateStatForPlayer();
        }
    }
    else if(humanChoice==paperButton)
    {
        if(computerChoice==0)
        {
            updateStatForPlayer();
        }
        else if(computerChoice==1)
        {
            showTie();
        }
        else if(computerChoice==2)
        {
            updateStatsForComputer();   
        }
    }
    else if(humanChoice==scissorButton)
    {
        if(computerChoice==0)
        {
            showTie();
        }
        else if(computerChoice==1)
        {
            updateStatForPlayer();
        }
        else if(compuerChoice==2)
        {
            updateStatsForComputer();
        }
    }
    else
    {
        console.log("ERROR");
    }


 
}



