
let currentPlayer = 'O';

let e = "empty";
let gameBoard = {tl:e,tm:e,tr:e,ml:e,mm:e,mr:e,bl:e,bm:e,br:e};

document.getElementById("gameBoardTable").addEventListener("click", function(){
    let squareId = event.target.id;
    playTrigger(squareId);
});

function playTrigger(squareId){
    let square = document.getElementById(squareId); 
    
    gameBoard[squareId] = currentPlayer;
        
    if (square.innerHTML == "'") { 

        square.innerHTML = currentPlayer; 

        checkWinCondition();

        if (currentPlayer == 'X'){
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }       
    };


}

function checkWinCondition(){
    if ((gameBoard['tl'] != e) && (gameBoard['tl'] == gameBoard['tm']) && (gameBoard['tm'] == gameBoard['tr'])){
        console.log(currentPlayer + ' is the winner!')
    }
}

