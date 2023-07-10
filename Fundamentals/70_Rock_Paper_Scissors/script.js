// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


const rps = (p1, p2) => {

    let result = ""
    if (p1 === p2) { result = 'Draw!' }
    else if (p1 === "scissors" && p2 === "paper") { result = 'Player 1 won!' }
    else if (p2 === "scissors" && p1 === "paper") { result = 'Player 2 won!' }
    else if (p1 === "paper" && p2 === "rock") { result = 'Player 1 won!' }
    else if (p2 === "paper" && p1 === "rock") { result = 'Player 2 won!' }
    else if (p1 === "rock" && p2 === "scissors") { result = 'Player 1 won!' }
    else if (p2 === "rock" && p1 === "scissors") { result = 'Player 2 won!' }

    return result;
};

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };

// const rps = (p1, p2) => {
//   if(p1 === p2) {
//     return 'Draw!'
//   }; 
//   return Player `${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
// }

console.log(rps('paper', 'paper'));