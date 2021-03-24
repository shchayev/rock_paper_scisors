
function computerSelect(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return 'Rock';
      }
      else if (randomNumber === 1){
        return 'Paper';
      }
      else {
      return 'Scissors';
      }
        }

function playerSelect(){
   let playerPrompt =  prompt("Choose rock, paper or scissors: ", );
   if (playerPrompt === null){
    return "Cancel"
}
   playerPrompt = playerPrompt.charAt(0).toUpperCase()+playerPrompt.slice(1).toLowerCase();
   return playerPrompt;
}


//let playerSel = prompt("Choose rock, paper or scissors: ", );
//const playerSelection = playerSel.charAt(0).toUpperCase()+playerSel.slice(1);
//const computerSelection = computerPlay();
//const playerSelection = computerPlay();
let computerScore = 0;
let computerTxt = "Computer score is: "
let playerScore = 0;
let playerTxt = "Player score is: "

function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Rock")
    {
        console.log("You chose " + playerSelection + ", " + "while computer chose " + computerSelection + ". " + "It's a Draw!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper")
    {   ++computerScore
        console.log("You chose " + playerSelection + ", " + "while computer chose " + computerSelection + ". " + "You Lose! Paper beats Rock!");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        ++playerScore
        console.log("You chose " + playerSelection + ", " + "while computer chose " + computerSelection + ". " + "You Win! Rock beats Scissors!");
    } else if (playerSelection === "Paper" && computerSelection ===   "Rock"){
        ++playerScore
        console.log("You chose " + playerSelection + ", " + "while computer chose " + computerSelection + ". " + "You Win! Paper beats Rock!");
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        console.log("You chose " + playerSelection + ", " + "while computer chose " + computerSelection + ". " + "It's a Draw!");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        ++computerScore
        console.log("You chose " + playerSelection + ", " + "while computer chose " + computerSelection + ". " + "You Lose! Scissors beat Paper!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        ++computerScore
        console.log("You chose " + playerSelection + ", " + "while computer chose " + computerSelection + ". " + "You Lose! Rock beats Scissors!");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        ++playerScore
        console.log("You chose " + playerSelection + ", " + "while computer chose " + computerSelection + ". " + "You Win! Scissors beat Paper!");
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        console.log("You chose " + playerSelection + ", " + "while computer chose " + computerSelection + ". " + "It's a Draw!");
    } else if (playerSelection === ""){
        console.log("You need to pick an item!");   
    } else if (playerSelection === "Cancel"){
        console.log("You won't avoid it!");
    } else {
        console.log("Sorry, this item can't participate in Rock, Paper, Scissors game!");
    }
}


function game(){
    for(let i = 1; i < 6; i++){
        //let playerSel = prompt("Choose rock, paper or scissors: ", );
        //let playerSelection = playerSel.charAt(0).toUpperCase()+playerSel.slice(1);
        //let computerSelection = computerPlay();
        //playRound(playerSelection(), computerSelection());
        console.log("Round: " + i);
        playRound(playerSelect(), computerSelect());
        console.log("Computer has: " + computerScore + " points. User has: " + playerScore + " points.");
        

    }
    if(computerScore===playerScore){
        console.log("It's a Tie!");
    }else if(computerScore<playerScore){
        console.log("You've won the match!");
    }else{
        console.log("Computer has won the game and conquered the world!");
    }
    }
    
game();

