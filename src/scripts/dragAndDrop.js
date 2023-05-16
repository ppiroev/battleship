function dragDrop(){
    
const cells = document.querySelectorAll(".cell-p1");
cells.forEach((cell) => {
  cell.addEventListener("dragover", (e) => {
    // console.log(e.target);
  });
});


const shipElement = document.querySelectorAll('.shipElement');
shipElement.forEach(ship => {
    console.log('test');
    ship.setAttribute("draggable", true);
    ship.addEventListener("dragend", (e) => {
      console.log(e.target);
    });
})
}

export {dragDrop}
