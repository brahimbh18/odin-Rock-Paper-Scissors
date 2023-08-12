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
    console.log("your score : " + player_score + "| computer's score : " + computer_score);

    document.querySelector('h3').textContent = `The computer choosed : ${computerSelection}`;
    switch (playerSelection)
    {
        case "rock":
            switch (computerSelection)
            {
                case "rock":
                    return "Tie";
                
                case "paper":
                    computer_score++;
                    return "You Lose! paper beats rock";

                case "scissors":
                    player_score++;
                    return "You Win! rock beats scissors";
            }
       

        case "paper":
            switch (computerSelection)
            {
                case "paper":
                    return "Tie";
                
                case "scissors":
                    computer_score++;
                    return "You Lose! scissors beats paper";

                case "rock":
                    player_score++;
                    return "You Win! paper beats rock";
            }
            break;

        case "scissors":
            switch (computerSelection)
            {
                case "scissors":
                    return "Tie";
                
                case "rock":
                    computer_score++;
                    return "You Lose! rock beats scissors";

                case "paper":
                    player_score++;
                    return "You Win! scissors beats paper";
            }
    
    }
}

function game(playerSelection)
{
   
   
    
    document.querySelector('h2').textContent = playRound(playerSelection, getComputerChoice());
    document.querySelector(".player").textContent = `Player's score : ${player_score}`;
    document.querySelector(".computer").textContent = `Computer's score : ${computer_score}`;
   
    if (roundCount == 5) console.log('game ended');
}

