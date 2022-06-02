/*----- constants -----*/
let playerOne = 0;
let playerTwo = 1;

let resultMessage = document.querySelector('#resultMessage');

const boardSpaces = document.querySelectorAll('.cells')

let space1 = document.getElementById('a1')
let space2 = document.getElementById('a2')
let space3 = document.getElementById('a3')
let space4 = document.getElementById('b1')
let space5 = document.getElementById('b2')
let space6 = document.getElementById('b3')
let space7 = document.getElementById('c1')
let space8 = document.getElementById('c2')
let space9 = document.getElementById('c3')

let playerTurn = document.querySelector('#playerTurn');




/*----- app's state (variables) -----*/

space1.value = '';
space2.value = '';
space3.value = '';
space4.value = '';
space5.value = '';
space6.value = '';
space7.value = '';
space8.value = '';
space9.value = '';


/*----- cached element references -----*/

let currentPlayer = Math.round(Math.random())

/*----- event listeners -----*/
boardSpaces.forEach(cell => cell.addEventListener('click', handleClick));
document.querySelector('#reset').addEventListener('click', restartGame);



/*----- functions -----*/

function handleClick(evt) {
    const clickedCell = evt.target;

    if(currentPlayer === 0){
       clickedCell.innerText = 'X';
       clickedCell.style.fontFamily = 'Original Surfer'
       currentPlayer = 1;
    } else if(currentPlayer === 1){
       clickedCell.innerText = 'O';
       clickedCell.style.fontFamily = 'Original Surfer'
       currentPlayer = 0;
    }

    turnDisplay();
    
    if(space1.innerText + space2.innerText + space3.innerText === 'XXX') {
        resultMessage.innerText = 'Player 1 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space4.innerText + space5.innerText + space6.innerText === 'XXX') {
        resultMessage.innerText = 'Player 1 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space7.innerText + space8.innerText + space9.innerText === 'XXX') {
        resultMessage.innerText = 'Player 1 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space1.innerText + space4.innerText + space7.innerText === 'XXX') {
        resultMessage.innerText = 'Player 1 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space2.innerText + space5.innerText + space8.innerText === 'XXX') {
        resultMessage.innerText = 'Player 1 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space3.innerText + space6.innerText + space9.innerText === 'XXX') {
        resultMessage.innerText = 'Player 1 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space1.innerText + space5.innerText + space9.innerText === 'XXX') {
        resultMessage.innerText = 'Player 1 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space3.innerText + space5.innerText + space7.innerText === 'XXX') {
        resultMessage.innerText = 'Player 1 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space1.innerText + space2.innerText + space3.innerText === 'OOO') {
        resultMessage.innerText = 'Player 2 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space4.innerText + space5.innerText + space6.innerText === 'OOO') {
        resultMessage.innerText = 'Player 2 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space7.innerText + space8.innerText + space9.innerText === 'OOO') {
        resultMessage.innerText = 'Player 2 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space1.innerText + space4.innerText + space7.innerText === 'OOO') {
        resultMessage.innerText = 'Player 2 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space2.innerText + space5.innerText + space8.innerText === 'OOO') {
        resultMessage.innerText = 'Player 2 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space3.innerText + space6.innerText + space9.innerText === 'OOO') {
        resultMessage.innerText = 'Player 2 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space1.innerText + space5.innerText + space9.innerText === 'OOO') {
        resultMessage.innerText = 'Player 2 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if(space3.innerText + space5.innerText + space7.innerText === 'OOO') {
        resultMessage.innerText = 'Player 2 wins!';
        boardSpaces.forEach(cell => cell.removeEventListener('click', handleClick));
        playerTurn.innerText = '';
    } else if((space1.innerText + space2.innerText + space3.innerText + space4.innerText + space5.innerText + space6.innerText + space7.innerText + space8.innerText + space9.innerText).length === 9) {
        resultMessage.innerText = "It's a draw!"
        playerTurn.innerText = '';
    }
    
    evt.target.removeEventListener('click', handleClick);
}



function turnDisplay() {
    if(currentPlayer === 0){
        playerTurn.innerText = "Player 1's (X) turn!";
    } else if(currentPlayer === 1){
        playerTurn.innerText = "Player 2's (0) turn!";
    }
}

function restartGame() {
    turnDisplay();
    space1.innerText = '';
    space2.innerText = '';
    space3.innerText = '';
    space4.innerText = '';
    space5.innerText = '';
    space6.innerText = '';
    space7.innerText = '';
    space8.innerText = '';
    space9.innerText = '';
    resultMessage.innerText = '';
    boardSpaces.forEach(cell => cell.addEventListener('click', handleClick));
}

turnDisplay();