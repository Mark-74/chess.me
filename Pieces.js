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

    move(targetX, targetY){

        let path = [];

        switch (this.piece){

            case "pawn":

                let distance = targetY-this.y; //distance from target Y to actual Y

                if(targetX != this.x) { //attacking diagonal piece
                    if(Math.abs(this.x-targetX) == 1 && Math.abs(this.y - targetY) == 1){

                        this.x = targetX;
                        this.y = targetY;
                        this.moves++;

                        return{
                            newX : this.x,
                            newY : this.y
                        }
                    } else return "not possible"
                }
                else{

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
                        this.moves++;

                        return{
                            newX : this.x,
                            newY : this.y
                        }

                    } else return "not possible";

                } else return "not possible";

            break;

            case "knight":

            if(!(this.x == targetX || this.y == targetY)){

                if((Math.abs(this.x - targetX) == 2 && Math.abs(this.y-targetY) == 1) || (Math.abs(this.x - targetX) == 1 && Math.abs(this.y-targetY) == 2)){

                    this.x = targetX;
                    this.y = targetY;
                    this.moves++;

                    return{
                        newX : this.x,
                        newY : this.y
                    }
                } else return "not possible";

            } else return "not possible";


            break;

            case "rook":

                if((this.x == targetX) ^ (this.y == targetY)) {//if the cell is the same error, if both the x and the y changed error, if only one of them changed ok;

                    if(this.y > targetY){
                        for(let i = 1; i <= this.y - targetY; i++){
                            let position = [this.x, this.y - i];
                            path.push(position);
                        }
                    } else if(this.y < targetY){
                        for(i in Range(1, targetY-this.y)){ //TODO: fix range
                            let position = [this.x, this.y + i];
                            path.push(position);
                        }
                    } else if(this.x > targetX){
                        for(i in Range(1, this.x-targetX)){
                            let position = [this.x - i, this.y];
                            path.push(position);
                        }
                    } else {
                        for(i in Range(1, targetX - this.x)){
                            let position = [this.x + i, this.y];
                            path.push(position);
                        }
                    }

                    this.x = targetX; //TODO: separate move from update position
                    this.y = targetY;
                    this.moves++;

                    return {
                        path : path,
                        newX : this.x,
                        newY : this.y
                    }
                } else return "not possible";

            break;

            case "king":

                if(!((Math.abs(this.x - targetX) > 1 || Math.abs(this.y-targetY) > 1) || (Math.abs(this.x - targetX) == 0 && Math.abs(this.y-targetY) == 0))){

                    this.x = targetX;
                    this.y = targetY;
                    this.moves++;

                    return{
                        newX : this.x,
                        newY : this.y
                    }

                } else return "not possible"

            break;

            case "queen":

            if((Math.abs(this.x - targetX) == Math.abs(this.y - targetY)) || ((this.x == targetX) ^ (this.y == targetY))){ //bishop + rook

                this.y = targetY;
                this.x = targetX;
                this.moves++;

                return{
                    newX : this.x,
                    newY : this.y
                }

            } else return "not possible";

            break;
        }

    }


}

module.exports = Pieces;
