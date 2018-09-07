
 
function createBoard(size){
  const container = document.querySelector("#board");

  let boxSize = 600/size;
  let count = 0;
  for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
      const box = document.createElement("div");
      box.classList.add("box");
      box.id = count.toString();
      container.appendChild(box);
      box.style.width = boxSize + "px";
      box.style.height = boxSize + "px";
      count++;
    }
  }
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
  box.addEventListener("mouseover", (e) => {
    changeColor(box.id);
    })
  });
}
function changeColor(boxId){
  let box = document.getElementById(boxId);
  box.style.backgroundColor = "blue";
}

function clearEventListener(){
  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", (e) => {
    clearCanvas();
  });
}

function clearCanvas(){
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.style.backgroundColor = "white";
  });
  let size = prompt("Enter the size of the rows/columns: ");
  deleteBoxes();
  createBoard(size);
}

function deleteBoxes(){
  const boxes = document.getElementsByClassName("box");
  while(boxes[0]){
    boxes[0].parentNode.removeChild(boxes[0]);
  }
}

createBoard(16);
clearEventListener();
