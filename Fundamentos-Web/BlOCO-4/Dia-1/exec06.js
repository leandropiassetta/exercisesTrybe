/* Write a program that takes the name of a chess piece and returns the moves it makes.
As a challenge, make the program work both if it receives the name of a chess piece with capital letters and with small letters, without increasing the amount of conditional.
As a hint, you can search for a function that makes a string case (lower case).
If the past part is invalid, the program must return an error message.
Example: bishop -> diagonals
*/

let piece = "hOrSe"

switch(piece.toLowerCase()){
    case "bishop":  
        console.log("diagonaly")
        break;
    case "rook":
        console.log("cardinals directions")
        break;
    case "king":
        console.log("move one square to any directions")
        break;
    case "queen":
        console.log("any directions")
        break;
    case "pawn":
        console.log("move only one square ahead or one square diagonally to capture a piece")
        break;
    case "horse":
        console.log("move in L")
        break;
    default:
        console.log("Please, insert a valid piece")            
}



