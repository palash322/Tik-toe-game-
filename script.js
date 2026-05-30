let currentPlayer = "X";
let board = ["","","","","","","","",""];
let gameOver = false;

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function play(cell,index){
    if(board[index] !== "" || gameOver) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if(checkWinner()){
        document.getElementById("status").textContent =
            `Player ${currentPlayer} Wins!`;
        gameOver = true;
        return;
    }

    if(!board.includes("")){
        document.getElementById("status").textContent = "Draw!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").textContent =
        `Player ${currentPlayer} Turn`;
}

function checkWinner(){
    return winPatterns.some(pattern =>
        pattern.every(i => board[i] === currentPlayer)
    );
}

function resetGame(){
    board = ["","","","","","","","",""];
    gameOver = false;
    currentPlayer = "X";
    document.getElementById("status").textContent = "Player X Turn";

    document.querySelectorAll(".cell").forEach(cell=>{
        cell.textContent = "";
    });
}
