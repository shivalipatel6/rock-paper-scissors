

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


function playGame(playerSelection, computerSelection){


    
}

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

let player = playerselection();
console.log(player);