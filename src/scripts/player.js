import { gameBoard } from "./gameboard.js";
import { updateBoard } from "./dom.js";
import { arrayEquals, randLoc } from "./helper.js";

class Player {
  constructor(type) {
    this.type = type;
    this.board = null;
    this.turn = false;
    this.lastShot = [9, 9];
  }

  randomAttack(x, y, board) {
    const isShotFired = board.shotsFired.some((v) => arrayEquals(v, [x, y]));
    if (isShotFired === true) {
      this.randomAttack(randLoc(), randLoc(), board);
    } else {
      if (typeof board.board[this.lastShot[0]][this.lastShot[1]] === "object") {
        const nextShot = this.adjacentShot(
          this.lastShot[0],
          this.lastShot[1],
          board
        );
        if (nextShot != null) {
          board.receiveAttack(nextShot[0], nextShot[1]);
          updateBoard(nextShot[0], nextShot[1]);
          this.lastShot = [nextShot[0], nextShot[1]];
        } else {
          board.receiveAttack(x, y);
          updateBoard(x, y);
          this.lastShot = [x, y];
        }
      } else {
        board.receiveAttack(x, y);
        updateBoard(x, y);
        this.lastShot = [x, y];
      }
    }
  }

  adjacentShot(x, y, board) {
    let potentialShots = [];

    const adjacentCells = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];

    adjacentCells.forEach((e) => {
      if(e[0] < 0 || e[0] > 9 || e[1] < 0 || e[1] > 9 ){
      } else {
        if (!board.shotsFired.some((v) => arrayEquals(v, [e[0], e[1]]))) {
          potentialShots.push([e[0], e[1]]);
        }
      }
      
    });
    if (potentialShots.length > 0) {
      const random = Math.floor(Math.random() * potentialShots.length);
      return potentialShots[random];
    } else return null;
  }

  changeTurn(enemy) {
    this.turn = true;
    enemy.turn = false;
  }
}

export { Player };
