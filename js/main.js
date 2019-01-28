
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
        console.log(currentPlayer + ' is the winner!');
    }
    if ((gameBoard['tl'] != e) && (gameBoard['tl'] == gameBoard['ml']) && (gameBoard['ml'] == gameBoard['bl'])){
        console.log(currentPlayer + ' is the winner!');
    }
    if ((gameBoard['tl'] != e) && (gameBoard['tl'] == gameBoard['mm']) && (gameBoard['mm'] == gameBoard['br'])){
        console.log(currentPlayer + ' is the winner!');
    }
    if ((gameBoard['tm'] != e) && (gameBoard['tm'] == gameBoard['mm']) && (gameBoard['mm'] == gameBoard['bm'])){
        console.log(currentPlayer + ' is the winner!');
    }
    if ((gameBoard['tr'] != e) && (gameBoard['tr'] == gameBoard['mr']) && (gameBoard['mr'] == gameBoard['br'])){
        console.log(currentPlayer + ' is the winner!');
    }
    if ((gameBoard['tr'] != e) && (gameBoard['tr'] == gameBoard['mm']) && (gameBoard['mm'] == gameBoard['bl'])){
        console.log(currentPlayer + ' is the winner!');
    }
    if ((gameBoard['ml'] != e) && (gameBoard['ml'] == gameBoard['mm']) && (gameBoard['mm'] == gameBoard['mr'])){
        console.log(currentPlayer + ' is the winner!');
    }
    if ((gameBoard['bl'] != e) && (gameBoard['bl'] == gameBoard['bm']) && (gameBoard['bm'] == gameBoard['br'])){
        console.log(currentPlayer + ' is the winner!');
    }

}

