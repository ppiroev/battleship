import "./style/style.css";
import {
  renderComputerBoard,
  renderPlayerBoard,
  updateBoard,
  renderWinner,
  renderGameField,
  modes,
} from "./scripts/dom.js";


modes.forEach((mode) => {
  mode.addEventListener("click", (e) => {
    const selectedMode = e.target.id;
    renderGameField(selectedMode);
    renderPlayerBoard();
    renderComputerBoard();
    const initScreen = document.querySelector(".gameMode");
    initScreen.remove();
  });
});