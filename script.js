const choice = ["rock", "paper", "scissors"];
const c = 3;

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

function loadGame() {

    document.querySelector('.container1').remove();

    const score = document.querySelector('.score');

    
    const player = document.createElement("div")
    const computer = document.createElement("div")

    player.classList.add('player');
    computer.classList.add('computer');

    player.textContent = "Player's score :";
    computer.textContent = "Computer's score :";

    score.appendChild(player);
    score.appendChild(computer);

    document.querySelector('h2').textContent = "choose to start!";

    const container = document.querySelector(".container");

    const rock = document.createElement("div");
    const paper = document.createElement("div");
    const scissors = document.createElement("div");

    rock.textContent = "✊";
    paper.textContent = "🤚";
    scissors.textContent = "✌";

    //rock.onclick = console.log('ff');
    rock.addEventListener('click', () => game('rock'));
    paper.addEventListener('click', () => game('paper'));
    scissors.addEventListener('click', () => game('scissors'));

    var elements = [rock, paper, scissors];
    elements.forEach(element => {
        element.classList.add('button');
        container.appendChild(element);
    });


}

function loadAboutPage() {
    document.querySelector('.container1').remove();

    document.querySelector('h3').textContent = "Section not ready yet! Stay tuned."

}