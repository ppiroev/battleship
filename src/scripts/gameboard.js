import { Ship } from "./shipfactory.js";
import { shipTypes } from "./helper.js";
import { randDir, randLoc, ifLegal } from "./helper.js";

class gameBoard {
  constructor() {
    this.board = this.createBoard();
    this.shotsFired = [];
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i].push(false);
      }
    }
    return board;
  }

  receiveAttack(x, y) {
    const locHit = this.board[x][y];
    if (typeof locHit === "object") {
      locHit.onHit();
      locHit.isSunk();
      this.shotsFired.push([x, y]);
    } else {
      this.shotsFired.push([x, y]);
    }
  }

  setShip(x, y, l, dir) {
    let ship = new Ship(l);
    if (x + l < 10 && y + l < 10) {
      if (dir === "v") {
        for (let i = y; i < y + l; i++) {
          this.board[x][i] = ship;
        }
      } else if (dir === "h") {
        for (let i = x; i < x + l; i++) {
          this.board[i][y] = ship;
        }
      }
    }
  }

  isTaken(x, y, l, dir) {
    let cells = [];
    if (dir === "v") {
      for (let i = y; i < y + l; i++) {
        cells.push(this.board[x][i]);
      }
    } else if (dir === "h") {
      for (let i = x; i < x + l; i++) {
        cells.push(this.board[i][y]);
      }
    }

    let obj = (obj) => typeof obj === "object";
    return cells.some(obj);
  }

  allShipsSunk() {
    let allSunk = true;
    this.board.forEach((arr) => {
      arr.forEach((e) => {
        if (typeof e === "object") {
          if (e.isSunk() === false) {
            allSunk = false;
          }
        }
      });
    });
    return allSunk;
  }

  isAdjacentTaken(x, y) {
    const adjacentCells = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];

    return adjacentCells.some(([i, j]) => {
      if (i < 0 || j < 0 || i > 9 || j > 9) {
        return false;
      }
      return typeof this.board[i][j] === "object";
    });
  }

  placeShipsRandom() {
    shipTypes.forEach((ship) => {
      let flag = false;
      while (flag === false) {
        let x = randLoc();
        let y = randLoc();
        let dir = randDir();
        if (ifLegal(x, y, ship.length)) {
          if (this.isTaken(x, y, ship.length, dir)) {
            continue;
          } else if (this.isAdjacentTaken(x, y)) {
            continue;
          } else {
            this.setShip(x, y, ship.length, dir);
            flag = true;
          }
        }
      }
    });
  }
}

export { gameBoard };
