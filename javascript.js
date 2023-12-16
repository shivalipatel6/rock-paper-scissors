

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

let opponent = getComputerChoice();
console.log(opponent);