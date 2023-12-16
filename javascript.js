

function getComputerChoice(){
let choice = Math.floor(Math.random() *3) +1;
//console.log(choice)
switch(choice) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Scissors";
      break;
    case 3:
      return "Paper";
      break;
    default:
      return "something went wrong here";
  }

}//end getComputerChoice function


function playRound(playerSelection, computerSelection){
let notTie = false;

while(!notTie){
    if(playerSelection === computerSelection){
    console.log("Tie! Try Again!!");  
    playerSelection = playerselection();
    computerSelection = getComputerChoice();
}// end if statement
else if(playerSelection == "Quit"){
    return 2;
    // return code for player quitting game
}// quit sequence
else{
    notTie= true;
    if(playerSelection === "Rock"){
        if(computerSelection === "Scissors"){
            console.log("You Win! Rock beats Scissors");
            return 0;
            // 0 is the player win code for when  5 rounds are played
        }// end inner if
        else{
            console.log("You Lose! Paper beats Rock");
            return 1;
            // 1 is the player lose code for when 5 rounds are played
        }// end inner else
    }// end outer if for ps === Rock
    else if(playerSelection === "Paper"){
        if(computerSelection === "Rock"){
            console.log("You Win! Paper beats Rock");
            return 0; 
        }// end inner if
        else{
            console.log("You Lose! Scissor beats Paper ");
            return 1;
        }// end else

    }// end outer if for PS === Paper
    else{
        if(playerSelection === "Paper"){
            console.log("You Win! Scissor beats Paper ");
            return 0;
        }
        else{
            console.log("You Lose! Rock beats Scissor");
            return 1;
        }
    }// end outer else for PS == Scissors
}// end else

}// end while loop


    
}// end playRound

function playerselection(){
let input = prompt("Please input Rock, Paper or Scissors. Submit Quit to end game");

input = input.toLowerCase();
//console.log(input);
let gottaAnswer = false;
while(!gottaAnswer){
    switch(input) {
        case "rock":
          return "Rock";
          break;
        case "scissors":
          return "Scissors";
          break;
        case "paper":
          return "Paper";
          break;
          case "quit":
          console.log("You have Quit the Game")
          gottaAnswer = true;
          return "Quit";
          break;
        default:
            alert("Something went wrong... lets try again");
            input = prompt("Please input Rock, Paper or Scissors. Submit Quit to end game");
            input = input.toLowerCase;

      }// end switch statment


}// end while loop 


return input;
}


let player =playerselection()
let computer = getComputerChoice();
let game= playRound(player, computer);
console.log(player);
console.log(computer);
console.log(game);