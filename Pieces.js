class Pieces {
    constructor(piece, colour, x, y){
        this.piece = piece;
        this.colour = colour;
        this.x = x;
        this.y = y;
    }

    static moves = 0; //how many times the piece has been moved
    
    getPiece(){
        return 'piece:' + this.piece;
    }

    getPosition(){
        return 'X: ' + this.x + ' Y: ' + this.y;
    }

    move(targetX, targetY){

        switch (this.piece){

            case "pawn":

                let distance = targetY-this.y;
                if(distance < 0) distance *= -1; //distance a questo punto è positivo

                if(targetX == this.x && distance < 2 ){ //controllo fattibilità del movimento

                if(distance == 2 && Pieces.moves != 0){} //controllo doppio primo passo
                else { //movimento accettato

                    this.y=targetY;

                    return{
                        newX : this.x,
                        newY : this.y
                        }
                    }

                } else {
                    return "error"; //segnalare l'errore in modo utile
                }    

            break;

            case "bishop":

                if(this.x != targetX){  //non può muoversi in un a cella con la stessa x
                    

                }

            break;

            case "knight":


            break;

            case "rook":


            break;

            case "king":



            break;

            case "queen":



            break;
        }

        


    }


}

module.exports = Pieces;
