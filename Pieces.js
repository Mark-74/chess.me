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

                    if(this.colour == "white"){ //controllo primario mossa
                        if(distance < 1 || distance > 2) return "not possible";
                    } else {
                        if(distance <-2 || distance > -1) return "not possible";
                    }

                    if(Math.abs(distance) == 2 && this.moves == 0){

                        let position;

                        if(this.colour == "white"){
                            position = [this.x, this.y + 1];
                        } else {
                            position = [this.x, this.y - 1];
                        }

                        path.push(position);
                        position = [this.x, this.y + distance] //distance can be -2 or +2 at this point
                        path.push(position);

                        this.y = targetY;
                        this.moves++;

                        return{
                            path : path,
                            newX : this.x,
                            newY : this.y
                            }

                    } else if (Math.abs(distance) == 1){
                        position = [targetX, targetY];
                        path.push(position);

                        this.y = targetY;
                        this.moves++;

                        return{
                            path : path,
                            newX : this.x,
                            newY : this.y
                            }

                    } else return "not possible";

                }

            break;

            case "bishop":

                if(this.x != targetX && this.y != targetY){  //non può muoversi in un a cella con la stessa x o alla stessa altezza y
                    
                    if(Math.abs(this.x - targetX) == Math.abs(this.y - targetY)){ //in questo caso è una diagonale


                        if(targetX < this.x){ //moving left (seen from black's POV)
                            if(targetY < this.y){
                                for(let i = 1; i <= this.x-targetX; i++ ){
                                    let position = [this.x-i, this.y-i];
                                    path.push(position);
                                }
                            } else {
                                for(let i = 1; i <= this.x-targetX; i++ ){
                                    let position = [this.x-i, this.y+i];
                                    path.push(position);
                                }
                            }
                        } else {              //Moving right (same POV)
                            if(targetY < this.y){
                                for(let i = 1; i <= this.x-targetX; i++ ){
                                    let position = [this.x+i, this.y-i];
                                    path.push(position);
                                }
                            } else {
                                for(let i = 1; i <= this.x-targetX; i++ ){
                                    let position = [this.x+i, this.y+i];
                                    path.push(position);
                                }
                            }
                        }

                        this.y = targetY;
                        this.x = targetX;
                        this.moves++;

                        return{
                            path : path,
                            newX : this.x,
                            newY : this.y
                        }

                    } else return "not possible";

                } else return "not possible";

            break;

            case "knight":

            if(!(this.x == targetX || this.y == targetY)){

                if((Math.abs(this.x - targetX) == 2 && Math.abs(this.y-targetY) == 1) || (Math.abs(this.x - targetX) == 1 && Math.abs(this.y-targetY) == 2)){ //doesn't need path because he can jump over pieces

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
                        for(let i = 1; i <= targetY-this.y; i++){
                            let position = [this.x, this.y + i];
                            path.push(position);
                        }
                    } else if(this.x > targetX){
                        for(let i = 1; i <= this.x-targetX; i++){
                            let position = [this.x - i, this.y];
                            path.push(position);
                        }
                    } else {
                        for(let i = 1; i <= targetX - this.x; i++){
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

                    //Doesn't need any path because he cannot jump over pieces moving only one square at a time

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

            let isBishop = false;
            let isRook = false;

            if((this.x == targetX) ^ (this.y == targetY)) isRook = true;
            if(Math.abs(this.x - targetX) == Math.abs(this.y - targetY)) isBishop = true;

            if(isRook || isBishop){ //bishop + rook

                if(isRook){
                    if(this.y > targetY){
                        for(let i = 1; i <= this.y - targetY; i++){
                            let position = [this.x, this.y - i];
                            path.push(position);
                        }
                    } else if(this.y < targetY){
                        for(let i = 1; i <= targetY-this.y; i++){
                            let position = [this.x, this.y + i];
                            path.push(position);
                        }
                    } else if(this.x > targetX){
                        for(let i = 1; i <= this.x-targetX; i++){
                            let position = [this.x - i, this.y];
                            path.push(position);
                        }
                    } else {
                        for(let i = 1; i <= targetX - this.x; i++){
                            let position = [this.x + i, this.y];
                            path.push(position);
                        }
                    }
                } else {
                    if(targetX < this.x){ //moving left (seen from black's POV)
                        if(targetY < this.y){
                            for(let i = 1; i <= this.x-targetX; i++ ){
                                let position = [this.x-i, this.y-i];
                                path.push(position);
                            }
                        } else {
                            for(let i = 1; i <= this.x-targetX; i++ ){
                                let position = [this.x-i, this.y+i];
                                path.push(position);
                            }
                        }
                    } else {              //Moving right (same POV)
                        if(targetY < this.y){
                            for(let i = 1; i <= this.x-targetX; i++ ){
                                let position = [this.x+i, this.y-i];
                                path.push(position);
                            }
                        } else {
                            for(let i = 1; i <= this.x-targetX; i++ ){
                                let position = [this.x+i, this.y+i];
                                path.push(position);
                            }
                        }
                    }
                }

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
