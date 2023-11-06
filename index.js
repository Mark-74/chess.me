const Pieces = require('./Pieces.js');

function isEmpty(x, y){
    if(matrix[y][x] == " ") return true;
    else return false;
}

function showMap(){
    for (let i = 0; i<8; i++){

        let row = "";
    
        for (let j = 0; j<8; j++){
    
            if(matrix[i][j] != " "){
                row += " " + matrix[i][j].piece;
            } else { row += "blank "; }
            
        }
        console.log(row + "\n")
    }
    
    console.log("\n\n")
}

function move(piece, x, y){ //TODO: update the functions so that you can attack enemy pieces
    if(checkLimits(x,y)){
        newPosition = piece.CanMoveTo(x, y)
        if(newPosition !== "not possible"){ //movement accepted

            newPosition.forEach(element => { //element[1] is y and element[0] is x
                if(!(isEmpty(element[1],element[0]))) {
                    console.log("found something: " + WhatAtPosition(element[1],element[0]) + " at " + element[0] + " " + element[1]);
                    return "not possible";
                }
            });
            //at this point if there is nothing in between the movement goes on

            let oldCoordinates = piece.getPosition();
            matrix[oldCoordinates.y][oldCoordinates.x] = " ";
            matrix[y][x] = piece;
            piece.move(x,y); //it's important to update the position of each piece

            return "ok";
        } else return "not possible"; 
    } else return "out of limits";
    
    //TODO: king check control and checkmate control
}

function WhatAtPosition(x, y){
    if(!isEmpty(x,y)) return matrix[y][x];
    else return "empty";
}

function checkLimits(x, y){
    if((x<0 || x > 7) || (y<0 || y>7)) return false;
    else return true;
}




let BlackPawn0 = new Pieces("pawn", "black", 0, 6);
let BlackPawn1 = new Pieces("pawn", "black", 1, 6);
let BlackPawn2 = new Pieces("pawn", "black", 2, 6);
let BlackPawn3 = new Pieces("pawn", "black", 3, 6);
let BlackPawn4 = new Pieces("pawn", "black", 4, 6);
let BlackPawn5 = new Pieces("pawn", "black", 5, 6);
let BlackPawn6 = new Pieces("pawn", "black", 6, 6);
let BlackPawn7 = new Pieces("pawn", "black", 7, 6);

let WhitePawn0 = new Pieces("pawn", "white", 0, 1);
let WhitePawn1 = new Pieces("pawn", "white", 1, 1);
let WhitePawn2 = new Pieces("pawn", "white", 2, 1);
let WhitePawn3 = new Pieces("pawn", "white", 3, 1);
let WhitePawn4 = new Pieces("pawn", "white", 4, 1);
let WhitePawn5 = new Pieces("pawn", "white", 5, 1);
let WhitePawn6 = new Pieces("pawn", "white", 6, 1);
let WhitePawn7 = new Pieces("pawn", "white", 7, 1);

let WhiteRook0 = new Pieces("rook", "white", 0, 0);
let WhiteRook7 = new Pieces("rook", "white", 7, 0);

let BlackRook0 = new Pieces("rook", "black", 0, 7);
let BlackRook7 = new Pieces("rook", "black", 7, 7);

let WhiteKnight1 = new Pieces("knight", "white", 1, 0);
let WhiteKnight6 = new Pieces("knight", "white", 6, 0);

let BlackNight1 = new Pieces("knight", "black", 1, 7);
let BlackNight6 = new Pieces("knight", "black", 6, 7);

let WhiteBishop2 = new Pieces("bishop", "white", 2, 0);
let WhiteBishop5 = new Pieces("bishop", "white", 5, 0);

let BlackBishop2 = new Pieces("bishop", "black", 2, 7);
let BlackBishop5 = new Pieces("bishop", "black", 5, 7);

let WhiteKing = new Pieces("king", "white", 4, 0);
let BlackKing = new Pieces("king", "black", 4, 7);

let WhiteQueen = new Pieces("queen", "white", 3, 0);
let BlackQueen = new Pieces("queen", "black", 3, 7);


let matrix = [ //scacchiera 8*8
    [ WhiteRook0 , WhiteKnight1 , WhiteBishop2 , WhiteQueen , WhiteKing , WhiteBishop5 , WhiteKnight6 , WhiteRook7 ],
    [ WhitePawn0 , WhitePawn1 , WhitePawn2 , WhitePawn3 , WhitePawn4 , WhitePawn5 , WhitePawn6 , WhitePawn7 ],
    [ " " , " " , " " , " " , " " , " " , " " , " " ],
    [ " " , " " , " " , " " , " " , " " , " " , " " ],
    [ " " , " " , " " , " " , " " , " " , " " , " " ],
    [ " " , " " , " " , " " , " " , " " , " " , " " ],
    [ BlackPawn0 , BlackPawn1 , BlackPawn2 , BlackPawn3 , BlackPawn4 , BlackPawn5 , BlackPawn6 , BlackPawn7 ],
    [ BlackRook0 , BlackNight1 , BlackBishop2 , BlackQueen , BlackKing , BlackBishop5 , BlackNight6 , BlackRook7 ]
];

showMap();


move(BlackPawn2, 2, 4);
console.log(WhatAtPosition(2, 4));
console.log(move(BlackPawn2, 2, 2));

console.log(isEmpty(2,4));

console.log(WhitePawn1.move(1, 3));
console.log(WhitePawn1.move(1, 5)); //no checks if you use the internal move function

console.log(move(WhiteBishop2, 3, 1));
console.log(WhatAtPosition(3,1)); //good move check

console.log(move(BlackBishop2, 2, 6)); //error check

console.log(BlackRook0.CanMoveTo(0,2));
console.log(BlackPawn0.getPosition());
console.log(WhatAtPosition(0,6)); //TODO: fix this bug, run to find out

console.log(move(BlackRook0, 0, 2));
