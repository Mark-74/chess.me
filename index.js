const Pieces = require('./Pieces.js');

function showMap(){
    for (let i = 0; i<8; i++){

        let row = "";
    
        for (let j = 0; j<8; j++){
    
            if(matrix[i][j] != ""){
                row += " " + matrix[i][j].piece;
            } else { row += "blank "; }
            
        }
        console.log(row + "\n")
    }
    
    console.log("\n\n")
}


let BlackPawn0 = new Pieces("pawn", 0, 6);
let BlackPawn1 = new Pieces("pawn", 1, 6);
let BlackPawn2 = new Pieces("pawn", 2, 6);
let BlackPawn3 = new Pieces("pawn", 3, 6);
let BlackPawn4 = new Pieces("pawn", 4, 6);
let BlackPawn5 = new Pieces("pawn", 5, 6);
let BlackPawn6 = new Pieces("pawn", 6, 6);
let BlackPawn7 = new Pieces("pawn", 7, 6);

let WhitePawn0 = new Pieces("pawn", 0, 1);
let WhitePawn1 = new Pieces("pawn", 1, 1);
let WhitePawn2 = new Pieces("pawn", 2, 1);
let WhitePawn3 = new Pieces("pawn", 3, 1);
let WhitePawn4 = new Pieces("pawn", 4, 1);
let WhitePawn5 = new Pieces("pawn", 5, 1);
let WhitePawn6 = new Pieces("pawn", 6, 1);
let WhitePawn7 = new Pieces("pawn", 7, 1);

let WhiteRook0 = new Pieces("rook", 0, 0);
let WhiteRook7 = new Pieces("rook", 7, 0);

let blackRook0 = new Pieces("rook", 0, 7);
let BlackRook7 = new Pieces("rook", 7, 7);

let WhiteKnight1 = new Pieces("knight", 1, 0);
let WhiteKnight6 = new Pieces("knight", 6, 0);

let BlackNight1 = new Pieces("knight", 1, 7);
let BlackNight6 = new Pieces("knight", 6, 7);

let WhiteBishop2 = new Pieces("bishop", 2, 0);
let WhiteBishop5 = new Pieces("bishop", 5, 0);

let Black1Bishop2 = new Pieces("bishop", 2, 7);
let BlackBishop5 = new Pieces("bishop", 5, 7);

let WhiteKing = new Pieces("king", 4, 0);
let BlackKing = new Pieces("king", 4, 7);

let WhiteQueen = new Pieces("queen", 3, 0);
let BlackQueen = new Pieces("queen", 3, 7);


let matrix = [ //scacchiera 8*8
    [ WhiteRook0 , WhiteKnight1 , WhiteBishop2 , WhiteQueen , WhiteKing , WhiteBishop5 , WhiteKnight6 , WhiteRook7 ],
    [ WhitePawn0 , WhitePawn1 , WhitePawn2 , WhitePawn3 , WhitePawn4 , WhitePawn5 , WhitePawn6 , WhitePawn7 ],
    [ "" , "" , "" , "" , "" , "" , "" , "" ],
    [ "" , "" , "" , "" , "" , "" , "" , "" ],
    [ "" , "" , "" , "" , "" , "" , "" , "" ],
    [ "" , "" , "" , "" , "" , "" , "" , "" ],
    [ BlackPawn0 , BlackPawn1 , BlackPawn2 , BlackPawn3 , BlackPawn4 , BlackPawn5 , BlackPawn6 , BlackPawn7 ],
    [ blackRook0 , BlackNight1 , Black1Bishop2 , BlackQueen , BlackKing , BlackBishop5 , BlackNight6 , BlackRook7 ]
];

showMap();

BlackPawn2.move(2, 4);
console.log(BlackPawn2.getPosition());
BlackPawn2.move(2,3)
console.log(BlackPawn2.getPosition());

