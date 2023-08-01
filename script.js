const choice = ["rock", "paper", "scissors"];
const c = 2;

var player_score = 0;
var computer_score = 0;

function getComputerChoice ()
{
    var i =  Math.floor(Math.random() * c);
    return choice[i];
}

function playerSelection() 
{
    var player_choice = prompt("choose ('rock', 'paper', 'scissors')").toLocaleLowerCase();
    if (choice.includes(player_choice))
    {
        return player_choice;
    }
    alert("Error! wrong choice");
    return playerSelection();
}


function playRound(playerSelection, computerSelection) 
{
    console.log("your score : " + player_score + "| computer's score : " + computer_score);

    console.log("The computer choosed : " + computerSelection);
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

function game()
{
    player_score = 0;
    computer_score = 0;

    for (i = 0; i < 5; i++)
    {
        console.log(playRound(playerSelection(), getComputerChoice()));
    }

    console.log("game ended")

    if (player_score == computer_score)
    {
        console.log("tie");
    }
    else if (player_score < computer_score)
    {
        console.log("You lose");
    }
    else if (player_score > computer_score)
    {
        console.log("You win");
    }

}
game();



