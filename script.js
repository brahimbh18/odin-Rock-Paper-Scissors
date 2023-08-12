const choice = ["rock", "paper", "scissors"];
const c = 2;

var player_score = 0;
var computer_score = 0;
var roundCount = 0;

function getComputerChoice ()
{
    var i =  Math.floor(Math.random() * c);
    return choice[i];
}


function playRound(playerSelection, computerSelection) 
{
    document.querySelector('h3').textContent = `The computer choosed : ${computerSelection}`;
    
    switch (playerSelection)
    {
        case "rock":
            switch (computerSelection)
            {
                case "rock":
                    res = "Tie";
                
                case "paper":
                    computer_score++;
                    res = "You Lose! paper beats rock";

                case "scissors":
                    player_score++;
                    res = "You Win! rock beats scissors";
            }
       

        case "paper":
            switch (computerSelection)
            {
                case "paper":
                    res = "Tie";
                
                case "scissors":
                    computer_score++;
                    res = "You Lose! scissors beats paper";

                case "rock":
                    player_score++;
                    res = "You Win! paper beats rock";
            }
            break;

        case "scissors":
            switch (computerSelection)
            {
                case "scissors":
                    res = "Tie";
                
                case "rock":
                    computer_score++;
                    res = "You Lose! rock beats scissors";

                case "paper":
                    player_score++;
                    res = "You Win! scissors beats paper";
            }
    
    }
    return res;
}
n = 0;
function game(playerSelection)
{
   console.log(n);
   n++;
   var computerSelection = getComputerChoice();
    var result = console.log(playRound(playerSelection, computerSelection));

    //document.querySelector('h2').textContent = (result);
    console.log(result)

    document.querySelector(".player").textContent = `Player's score : ${player_score}`;
    document.querySelector(".computer").textContent = `Computer's score : ${computer_score}`;
   
    if (roundCount == 5) console.log('game ended');
}

