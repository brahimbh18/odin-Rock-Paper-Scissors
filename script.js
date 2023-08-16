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
        loadResult();
        player_score = 0;
        computer_score = 0;
    }
}


const container = document.querySelector('.container');
function loadHome() {
    // empty the container
    console.log(container);
    container.innerHTML = "";

    // create the start and about buttons
    const start_btn = document.createElement("button");
    const about_btn = document.createElement("button");

    start_btn.textContent = "Start Game";
    about_btn.textContent = "About";
    
    start_btn.addEventListener('click', () => loadGame());
    about_btn.addEventListener('click', () => loadAbout());

    // append the buttons to the container 
    container.appendChild(start_btn);
    container.appendChild(about_btn);
}

function loadGame() {
    container.innerHTML = "";

    // score widget ------------------------
    const score = document.createElement("div");
    const player = document.createElement("div");
    const computer = document.createElement("div");

    score.classList.add("score");
    player.classList.add("player");
    computer.classList.add("computer");

    player.textContent = "Player's score :";
    computer.textContent = "Computer's score :";
    
    score.appendChild(player);
    score.appendChild(computer);1
    //--------------------------------------
    const h3 = document.createElement("h3");
    const h2 = document.createElement("h2");
    h2.textContent =  "Choose to start!";
    //-------------------------------------- 

    const btnContainer = document.createElement('div');
    btnContainer.classList.add("btn-container");

    const rock = document.createElement('div');
    const paper = document.createElement('div');
    const scissors = document.createElement('div');

    rock.addEventListener('click', () => game('rock'));
    paper.addEventListener('click', () => game("paper"));
    scissors.addEventListener('click', () => game("scissors"));

    var elements = [rock, paper, scissors];
    var choices = ["✊", "🤚", "✌"]
    var i = 0;
    
    elements.forEach(element => {
        element.classList.add('btn');
        element.textContent = choices[i];
        i++;
        btnContainer.appendChild(element);
    })
    //--------------------------------------

    container.appendChild(score);
    container.appendChild(h3);
    container.appendChild(h2);
    container.appendChild(btnContainer);
}

function loadResult() {

    container.innerHTML = "";

    const h2 = document.createElement('h2');

    if (player_score < computer_score) h2.textContent = "Game over! You lost!"
    else if(player_score > computer_score) h2.textContent = "Congratulations! You won!";
    else h2.textContent = "Score tied!";

    const play_btn = document.createElement('button');
    const home_btn = document.createElement('button');
    play_btn.classList.add("play-btn");
    home_btn.classList.add("home-btn");

    play_btn.textContent = "Play again";
    home_btn.textContent = "Home";

    play_btn.addEventListener('click', () => loadGame());
    home_btn.addEventListener('click', () => loadHome());


    container.appendChild(h2);
    container.appendChild(play_btn);
    container.appendChild(home_btn);

}

function loadAbout() {
    container.innerHTML = "";

    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');

    const a = document.createElement('a');   
    var link = document.createTextNode("Click here");
    a.appendChild(link);
    a.title = "Click here "
    a.href = 'https://en.wikipedia.org/wiki/Rock_paper_scissors';

    const span = document.createElement('span');
    const p = document.createElement('p');

    p.textContent = "for more in depth information." ;
    span.appendChild(a);
    span.appendChild(p);

    
    li1.textContent = "Rock paper scissors is often used as a fair choosing method between two people, similar to coin flipping, drawing straws, or throwing dice in order to settle a dispute or make an unbiased group decision.";
    li2.textContent = "But this time you will be playing against the computer.";
    li3.textContent = "A game consists of five rounds, and the best out of five wins!";
    li4.textContent = "Instructions :";
    li5.textContent = "Rock beats scissors by breaking it.";
    li6.textContent = "Scissors beat paper by cutting it.";
    li7.textContent = "Paper beats rock by covering it.";
    li8.appendChild(span)

    const sublist = document.createElement('ul');
    var subLines = [li5, li6, li7];
    subLines.forEach(line => sublist.appendChild(line));
    li4.appendChild(sublist)

    var lines = [li1, li2, li3, li4, li8];
    lines.forEach(line => ul.appendChild(line));

    const btn = document.createElement("button");
    btn.textContent = "Home";
    btn.classList.add("home");
    btn.addEventListener('click', () => loadHome()),

    container.appendChild(ul);
    container.appendChild(btn)



}




loadHome();