//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const boardElement = document.querySelector(".board");
const resetBtnEl = document.querySelector("#reset");

/*-------------------------------- Functions --------------------------------*/

//Dispplay state of game to the user
function render(){
    updateBoard();
    updatedMessage();
}

//State of game as it loads up and ready to initialize
function init(){
    console.log("Game Initialized");
    board = ["", "", "", "", "", "", "", "", "",];
    turn = "X";
    winner = false;
    tie = false;
    updateBoard();
    render();
}
init();

function updateBoard(){
    squareEls.forEach((squareEl, index)=>{
        squareEl.textContent = board[index]
    })
}

function updatedMessage(){
    if(winner === false && tie === false){
        messageEl.textContent = `It's your turn Player ${turn}`;
    }else if(winner === false && tie === true){
        messageEl.textContent = "It's a tie";
    }else{
        messageEl.textContent = `Congratulations Player ${turn}, you won!`;
    }
}

function placePiece(index){
    board[index] = turn;
    console.log(board);
}



function handleClick(event){
    const squareIndex = event.target.id;
    if(board[squareIndex] === ""){
        event.target.textContent = turn;
    }
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();   
}

function checkForWinner(){
    if(board[0] !== "" && board[0] === board[1] && board[0] === board[2]){
        winner = true;
        
    }else if(board[3] !== "" && board[3] === board[4] && board[3] === board[5]){
        winner = true;
        
    }else if(board[6] !== "" && board[6] === board[7] && board[6] === board[8]){
        winner = true;
        
    }else if(board[0] !== "" && board[0] === board[3] && board[0] === board[6]){
        winner = true;
        
    }else if(board[1] !== "" && board[1] === board[4] && board[1] === board[7]){
        winner = true;
        
    }else if(board[2] !== "" && board[2] === board[5] && board[2] === board[8]){
        winner = true;
        
    }else if(board[0] !== "" && board[0] === board[4] && board[0] === board[8]){
        winner = true;
        
    }else if(board[2] !== "" && board[2] === board[4] && board[2] === board[6]){
        winner = true;
        
    }
}

function checkForTie(){
    if(winner === true){
        return;
    }else{
        tie = board.every((square)=>{
            return square !== ""
        })
    }
}

function switchPlayerTurn(){
    if(winner){
        return;
    }else if(!winner){
        if(turn === "X"){
            turn = "O";
        }else if(turn === "O"){
            turn = "X";
        }
    }
}


/*----------------------------- Event Listeners -----------------------------*/
boardElement.addEventListener("click", handleClick);
resetBtnEl.addEventListener("click", init);



