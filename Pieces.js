class Pieces {
    constructor(piece, colour, x, y){
        this.piece = piece;
        this.colour = colour;
        this.x = x;
        this.y = y;
        this.moves = 0; //how many times the piece has been moved
    }
    
    getPiece(){
        return this.piece;
    }

    getPosition(){
        return{
            x : this.x,
            y : this.y
        }
    }

    //TODO: funzion che controlli che non si superino i limiti della scacchiera

    move(targetX, targetY){

        switch (this.piece){

            case "pawn":

                if(targetX != this.x) return "not possible";
                else{

                    let distance = targetY-this.y; //distance from target Y to actual Y

                    if(this.colour == "white"){ //contorllo primario mossa
                        if(distance < 1 || distance > 2) return "not possible";
                    } else {
                        if(distance <-2 || distance > -1) return "not possible";
                    }
    
                    if(!((distance == 2 || distance == -2)&& this.moves != 0)){
                        this.y = targetY;
                        this.moves++;
    
                        return{
                            newX : this.x,
                            newY : this.y
                            }

                    } else return "not possible"
                }

            break;

            case "bishop":

                if(this.x != targetX && this.y != targetY){  //non può muoversi in un a cella con la stessa x o alla stessa altezza y
                    
                    if(Math.abs(this.x - targetX) == Math.abs(this.y - targetY)){ //in questo caso è una diagonale

                        this.y = targetY;
                        this.x = targetX;

                        return{
                            newX : this.x,
                            newY : this.y
                        }

                    } else return "not possible";

                } else return "not possible";

            break;

            case "knight":


            break;

            case "rook":

                if((this.x == targetX) ^ (this.y == targetY)) {//if the cell is the same error, if both the x and the y changed error, if only one of them changed ok;

                    this.x = targetX;
                    this.y = targetY;

                    return {
                        newX : this.x,
                        newY : this.y
                    }
                } else return "not possible";

            break;

            case "king":



            break;

            case "queen":



            break;
        }

        


    }


}

module.exports = Pieces;
