import { gameBoard } from "./gameboard.js";
import { Player } from "./player.js";
import { randLoc, shipTypes } from "./helper.js";

const modes = document.querySelectorAll(".mode");

const player = new Player("human");
const computer = new Player("computer");

let playerBoard = new gameBoard();
const computerBoard = new gameBoard();

computerBoard.placeShipsRandom();
playerBoard.placeShipsRandom();

function randomPlacementBtn() {
  const leftGrid = document.querySelector(".left-grid");
  while (leftGrid.firstChild) {
    leftGrid.firstChild.remove();
  }

  playerBoard = new gameBoard();
  playerBoard.placeShipsRandom();

  renderPlayerBoard();
}

function renderComputerBoard() {
  const rightGrid = document.querySelector(".right-grid");
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    rightGrid.appendChild(row);

    computerBoard.board[i].forEach((c, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-p2");
      cell.setAttribute("data-col", `${i}`);
      cell.setAttribute("data-row", `${j}`);
      row.appendChild(cell);

      cell.addEventListener("click", function handleRound(e) {
        const x = e.target.dataset.col;
        const y = e.target.dataset.row;
        if (typeof computerBoard.board[x][y] === "object") {
          e.target.style.backgroundColor = "darkred";
        } else {
          e.target.style.backgroundColor = "lightgray";
        }
        computerBoard.receiveAttack(x, y);
        const computerSunk = computerBoard.allShipsSunk();
        if (computerSunk === true) {
          renderWinner("player");
        } else {
          computer.randomAttack(randLoc(), randLoc(), playerBoard);

          const playerSunk = playerBoard.allShipsSunk();
          if (playerSunk === true) {
            renderWinner("computer");
          }
        }
        cell.removeEventListener("click", handleRound);
      });
    });
  }
}

function renderPlayerBoard() {
  const leftGrid = document.querySelector(".left-grid");
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("row-p1");
    leftGrid.appendChild(row);

    playerBoard.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-p1");
      cell.setAttribute("data-p1col", `${i}`);
      cell.setAttribute("data-p1row", `${j}`);
      if (typeof e === "object") {
        cell.style.backgroundColor = "gray";
      }
      row.appendChild(cell);
    });
  }
}

function updateBoard(x, y) {
  const cell = document.querySelector(
    `.cell-p1[data-p1col="${x}"][data-p1row="${y}"]`
  );
  if (typeof playerBoard.board[x][y] === "object") {
    cell.style.backgroundColor = "darkred";
  } else {
    cell.style.backgroundColor = "yellow";
  }
}

function renderWinner(winner) {
  const view = document.querySelector(".content");
  const winnerDisplay = document.createElement("div");
  winnerDisplay.classList.add("winnerDisplay");
  const winnerMessage = document.createElement("h1");
  const instMessage = document.createElement("p");
  instMessage.textContent = "Refresh to play again";

  if (winner === "player") {
    winnerMessage.textContent = "Player Wins";
  } else {
    winnerMessage.textContent = "Computer Wins";
  }
  winnerDisplay.append(winnerMessage, instMessage);
  view.append(winnerDisplay);
}

function renderGameField(mode) {
  const gamefield = document.createElement("div");
  gamefield.classList.add("gamefield");

  const leftside = document.createElement("div");
  leftside.classList.add("left");
  const player1 = document.createElement("p");

  const rightside = document.createElement("div");
  rightside.classList.add("right");
  const player2 = document.createElement("p");

  if (mode === "pvc") {
    player1.textContent = "Player";
    player2.textContent = "Computer";
  } else if (mode === "pvp") {
    player1.textContent = "Player One";
    player2.textContent = "Player Two";
  }

  const leftGrid = document.createElement("div");
  leftGrid.classList.add("left-grid");
  const rightGrid = document.createElement("div");
  rightGrid.classList.add("right-grid");

  const placement = document.createElement('div');
  const randPlaceBtn = document.createElement("p");
  randPlaceBtn.classList.add("randBtn");
  randPlaceBtn.textContent = "Place Random";
  randPlaceBtn.addEventListener("click", (e) => {
    randomPlacementBtn();
  });
  placement.append(randPlaceBtn)

  leftside.append(player1, leftGrid, placement);
  rightside.append(player2, rightGrid);
  gamefield.append(leftside, rightside);

  const content = document.querySelector(".content");
  content.append(gamefield);
}
// Working on drag and drop functionality


// function dragAndDropShips(side){
//   const leftside = document.querySelector('.left');
//   const dragDropShips = document.createElement('div');
//   dragDropShips.classList.add('drag-drop');
//   shipTypes.forEach(ship => {
//     const shipElement = document.createElement('div');
//     shipElement.classList.add(`${ship.type}`)
//     shipElement.classList.add('shipElement')
//     for(let i = 0; i < ship.length; i++){
//       const cell = document.createElement('div');
//       cell.classList.add('cell-p1');
//       shipElement.append(cell);
//     }

//     dragDropShips.append(shipElement);
//   })
//   side.append(dragDropShips)
// }



export {
  renderComputerBoard,
  renderPlayerBoard,
  updateBoard,
  renderWinner,
  renderGameField,
  modes,
};
