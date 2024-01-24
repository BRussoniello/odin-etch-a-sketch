/*
Grid size = # of boxes per container side
*/

//user needs to be PROMPTED when clicking button. use prompt()
//text field will default to 16.

function makeGrid(gridSize,gridContainer,boxSize) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
    for (let i = 1; i <= gridSize; i++) {
        let row = document.createElement("div");
        row.setAttribute("class","row");
        row.style.display="flex";
        row.style.width = intToSizeStyleString(gridSize*boxSize);
        row.style.height = intToSizeStyleString(boxSize);
        
        for (let j = 1; j<= gridSize; j++) {
            let rowSquare = document.createElement("div")
            rowSquare.setAttribute("class","row-square");
            rowSquare.style.height = row.style.height;
            rowSquare.style.width = row.style.height;
            rowSquare.style.border = "1px solid black";
            rowSquare.style.boxSizing="border-box";
            //add mouse hover event listener
            row.appendChild(rowSquare);
            
            
            }
            gridContainer.appendChild(row)
        }
    }

function getBoxSideLength(containerSideLength,grid_size) {
    return containerSideLength/grid_size;
    }

function intToSizeStyleString(int) {
    return int + "px";
    }

function gridSizeIsValid(gridSize) {
    return gridSize <= 100 && gridSize > 0;
}

function main() {
    const gridSizeSpan = document.querySelector("#grid-size");
    const gridSizeButton = document.querySelector(".size-button");
    const INITIAL_GRID_SIZE = +(gridSizeSpan.textContent);
    let currentGridSize = INITIAL_GRID_SIZE;
    let squareContainer = document.querySelector(".square-container");
    let squareContainerSize = squareContainer.offsetWidth;
    const INITIAL_BOX_SIDE_SIZE = getBoxSideLength(squareContainerSize,INITIAL_GRID_SIZE);

    gridSizeButton.addEventListener("click", (e) => {
        const newGridSize = +prompt("Enter a new grid size (1-100):");
        if (gridSizeIsValid(newGridSize)) {
            const newBoxSideSize = getBoxSideLength(squareContainerSize, newGridSize);
            makeGrid(newGridSize,squareContainer,newBoxSideSize);
            gridSizeSpan.textContent = newGridSize;
        }
        else {
            alert("Invalid grid size.");
    
            }
        }
    )
    makeGrid(currentGridSize,squareContainer,INITIAL_BOX_SIDE_SIZE);
}

main();
