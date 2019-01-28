
let currentPlayer = 'O';


const Player = function(noughtOrCross) {
    this.noughtOrCross = noughtOrCross;
    this.playSquare = (squareId) => {
 
        let square = document.getElementById(squareId);   
        
        if (square.innerHTML == "'") { 

            square.innerHTML = noughtOrCross; 

            if (currentPlayer == 'X'){
                currentPlayer = '0';
            } else {
                currentPlayer = 'X';
            }       
        };

    };
};

const noughtPlayer = new Player('O');
const crossPlayer = new Player('X');


const GameBoard = (() => {
    let e = "empty";
    let gameboard = {tl:e,tm:e,tr:e,ml:e,mm:e,mr:e,bl:e,bm:e,br:e};

    document.getElementById("gameBoardTable").addEventListener("click", function(){
        let squareId = event.target.id
        if (currentPlayer == 'X'){
            crossPlayer.playSquare(squareId);
        } else {
            noughtPlayer.playSquare(squareId)
        }
    });

})();


