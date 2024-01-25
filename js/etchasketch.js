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
        row.setAttribute("draggable",false);
        
        for (let j = 1; j<= gridSize; j++) {
            let rowSquare = document.createElement("div");
            rowSquare.setAttribute("class","row-square");
            rowSquare.setAttribute("draggable",false);
            rowSquare.style.height = row.style.height;
            rowSquare.style.width = row.style.height;
            rowSquare.style.border = "1px solid black";
            rowSquare.style.boxSizing="border-box";
            rowSquare=addColorEventToSquare(rowSquare);
            //add mouse hover event listener
            row.appendChild(rowSquare);
            
            
            }
            gridContainer.appendChild(row)
        }
    }

function getBoxSideLength(containerSideLength,gridSize) {
    return containerSideLength/gridSize;
    }

function intToSizeStyleString(int) {
    return int + "px";
    }

function gridSizeIsValid(gridSize) {
    return gridSize <= 100 && gridSize > 0;
    }


function getRandomRGB() {
    const R = Math.floor(Math.random()*255);
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);
    return `rgb(${R}, ${G}, ${B})`
}

function addColorEventToSquare(rowSquare) {
    const events = ["mouseenter","click"];
    events.forEach((event) => {rowSquare.addEventListener(event, (e) => {
        console.log(e);
         if (event === "click" || e.buttons > 0) {
        rowSquare.style.background=getRandomRGB();
        //rowsquare.style.background = 
            }
        }   
    ) } )
    return rowSquare;
}       

function main() {
    const gridSizeSpan = document.querySelector("#grid-size");
    const gridSizeButton = document.querySelector(".size-button");
    const gridClearButton = document.querySelector(".clear-button");
    const INITIAL_GRID_SIZE = +(gridSizeSpan.textContent);
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
    gridClearButton.addEventListener("click", () => {
            const currentGridSize = +(gridSizeSpan.textContent);
            makeGrid(currentGridSize,squareContainer,
                squareContainer.firstChild.firstChild.offsetWidth)
        
            }
    )
    


    makeGrid(INITIAL_GRID_SIZE,squareContainer,INITIAL_BOX_SIDE_SIZE);
}

main();
