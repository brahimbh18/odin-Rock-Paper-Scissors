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
    const h3 = document.createElement('h3');
    h3.textContent = `The computer choosed : ${computerSelection}`;
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
    roundCount++;
    if (roundCount == 5) {
        
        roundCount = 0;
        gameEnded();
    }
}

function gameEnded() {

    
    const container = document.querySelector('.container1');
    container.innerHTML = "";  

    const div = document.createElement("div");
    div.classList.add("result");

    console.log(player_score);
    console.log(computer_score);
    if (player_score < computer_score) div.textContent = "Game over! You lost!"
    else if(player_score > computer_score) div.textContent = "Congratulations! You won!";
    else div.textContent = "Score tied!";

    
    const div1 = document.createElement("div");
    const playBtn = document.createElement('button');
    const homeBtn = document.createElement('button');
    div1.classList.add('btns');
    playBtn.classList.add('playBtn');
    homeBtn.classList.add('homeBtn');

    playBtn.textContent = "Play again";
    homeBtn.textContent = "Home";
    player_score = 0;
    computer_score = 0;
    playBtn.addEventListener('click', () =>  loadGame());

    div1.appendChild(playBtn);
    div1.appendChild(homeBtn);
    
    container.appendChild(div);
    container.appendChild(div1);

    
    
}


function loadGame() {

    const container1 = document.querySelector('.container1');
    container1.innerHTML = "";

    const score = document.createElement('div');
    score.classList.add(".score")

    
    const player = document.createElement("div")
    const computer = document.createElement("div")

    player.classList.add('player');
    computer.classList.add('computer');

    player.textContent = "Player's score :";
    computer.textContent = "Computer's score :";

    score.appendChild(player);
    score.appendChild(computer);

    h2 = document.createElement('h2');
    h2.textContent = "choose to start!";

    

    const container = document.createElement("div");
    container.classList.add(".container")

    const rock = document.createElement("div");
    const paper = document.createElement("div");
    const scissors = document.createElement("div");

    rock.textContent = "✊";
    paper.textContent = "🤚";
    scissors.textContent = "✌";

    
    rock.addEventListener('click', () => game('rock'));
    paper.addEventListener('click', () => game('paper'));
    scissors.addEventListener('click', () => game('scissors'));

    var elements = [rock, paper, scissors];
    elements.forEach(element => {
        element.classList.add('button');
        container.appendChild(element);
    });

    container1.appendChild(score);
    container1.appendChild(h2);
    container1.appendChild(container);
}

function loadAboutPage() {
    const container = document.querySelector('.container1');
    container.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.textContent = "Section not ready yet! Stay tuned."


    container.appendChild(h3);
}