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
    render();
}
init();

function updateBoard(){
    board.forEach((sqr)=>{
        switch(sqr){
            case board[0]:
                squareEls[0].textContent = sqr;
                break;
            case board[1]:
                squareEls[1].textContent = sqr;
                break;
            case board[2]:
                squareEls[2].textContent = sqr;
                break;
            case board[3]:
                squareEls[3].textContent = sqr;
                break;
            case board[4]:
                squareEls[4].textContent = sqr;
                break;
            case board[5]:
                squareEls[5].textContent = sqr;
                break;
            case board[6]:
                squareEls[6].textContent = sqr;
                break;
            case board[7]:
                squareEls[7].textContent = sqr;
                break;
            case board[8]:
                squareEls[8].textContent = sqr;
                break;
            default:
                console.log(`Error`);
        }
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
    switch(event.target.id){
        case "0":
            squareIndex = event.target.id;
            event.target.textContent = turn;
            placePiece(squareIndex);
            break;
        case "1":
            squareIndex = event.target.id;
            event.target.textContent = turn;
            placePiece(squareIndex);;
            break;
        case "2":
            squareIndex = event.target.id;
            event.target.textContent = turn;
            placePiece(squareIndex);
            break;
        case "3":
            squareIndex = event.target.id;
            event.target.textContent = turn;
            placePiece(squareIndex);
            break;
        case "4":
            squareIndex = event.target.id;
            event.target.textContent = turn;
            placePiece(squareIndex);
            break;
        case "5":
            squareIndex = event.target.id;
            event.target.textContent = turn;
            placePiece(squareIndex);
            break;
        case "6":
            squareIndex = event.target.id;
            event.target.textContent = turn;
            placePiece(squareIndex);
            break;
        case "7":
            squareIndex = event.target.id;
            event.target.textContent = turn;
            placePiece(squareIndex);
            break;
        case "8":
            squareIndex = event.target.id;
            event.target.textContent = turn;
            placePiece(squareIndex);
            break;
        default:
            console.log("Error - Please Select a Square");
    }
    checkForWinner();   
}

function checkForWinner(){
    if(board[0] !== "" && board[0] === board[1] && board[0] === board[2]){
        winner = true;
        console.log(winner)
    }
}


/*----------------------------- Event Listeners -----------------------------*/
boardElement.addEventListener("click", handleClick)



