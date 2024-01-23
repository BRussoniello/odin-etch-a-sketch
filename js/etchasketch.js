/*
Grid size = # of boxes in container
*/

//user needs to be PROMPTED when clicking button. use prompt()
//text field will default to 16.
const INITIAL_GRID_SIZE = +(document.querySelector("#grid-size").textContent);
let currentGridSize = INITIAL_GRID_SIZE;
let squareContainer = document.querySelector(".square-container");
let squareContainerSize = squareContainer.offsetWidth;
const INITIAL_BOX_SIDE_SIZE = getBoxSideLength(squareContainerSize,INITIAL_GRID_SIZE);

for (let i = 1; i <= INITIAL_GRID_SIZE; i++) {
    let row = document.createElement("div");
    row.setAttribute("class","row");
    row.style.display="flex";
    row.style.width = intToSizeStyleString(INITIAL_GRID_SIZE*INITIAL_BOX_SIDE_SIZE);
    row.style.height = intToSizeStyleString(INITIAL_BOX_SIDE_SIZE);
    for (let j = 1; j<= INITIAL_GRID_SIZE; j++) {
        let rowSquare = document.createElement("div")
        rowSquare.setAttribute("class","row-square");
        rowSquare.style.height = intToSizeStyleString(INITIAL_BOX_SIDE_SIZE);
        rowSquare.style.width = intToSizeStyleString(INITIAL_BOX_SIDE_SIZE);
        rowSquare.style.border = "1px solid black";
        rowSquare.style.boxSizing="border-box";
        //add mouse hover event listener
        row.appendChild(rowSquare);
        
        
    }
    squareContainer.appendChild(row)
}

function getBoxSideLength(containerSideLength,grid_size) {
    return containerSideLength/grid_size;
}

function intToSizeStyleString(int) {
    return int + "px";
}

