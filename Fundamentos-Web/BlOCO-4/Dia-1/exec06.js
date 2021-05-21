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



