// target grid and btn-grid
let gridSize = 16;
let grid = document.querySelector("#grid");
// set up btnGrid
const btnGrid = document.querySelector("#btn-grid");
btnGrid.addEventListener('click', newGrid);

/**
 * Creates an nxn grid of squares.
 * @param {Number} n - the number of rows and columns for the grid.
 */
function createGrid(n){
    // n times, append a "row" as a child.
    for (let i = 0; i < n; i++){
        // create an element, row, give it class grid-row.
        const row = document.createElement('div');
        row.classList.add('grid-row');

        // n times, append a "square" as a child.
        for (let i = 0; i < n; i++){
            // create a square, give it class grid-square
            const square = document.createElement('div');
            // disable "selecting", solves issue of dragging causing mouseup/mousedown bugs
            square.style.userSelect = "none";
            square.classList.add('grid-square');
            // square finished, append to row.
            row.appendChild(square);
        }

        // row finished, append it to grid.
        grid.appendChild(row);
    }
    addDrawListeners();
}

/**
 * Add listeners for each square on the grid, making them a different color on
 * hover.
 */
function addDrawListeners(){
    const squares = document.querySelectorAll('.grid-square');
    let isDrawing = false;

    squares.forEach((square) => {
        //draw if mousedown, and enable drawing while mousedown.
        square.addEventListener('mousedown', () => {
            square.style.backgroundColor = "#000000";
            isDrawing = true;
        })
        // if mouseup, then turn off drawing.
        square.addEventListener('mouseup', () => {
            isDrawing = false;
        })
        // allows for click and hold drawing.
        square.addEventListener('mouseover', () => {
            if(isDrawing){
                square.style.backgroundColor = "#000000";
            }
        })
    })
}

/**
 * Removes the grid contents from the DOM.
 */
function removeGrid(){
    // While there are still children of grid, remove the last child.
    while (grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}

/**
 * Event for btnGrid. Prompts the user for a new grid size, removes the old
 * grid, and creates a new one of the size asked.
 */
function newGrid(){
    let valid = false;
    gridSize = parseInt(prompt('Enter a new width/height for the grid. (Up to 100 squares wide/tall)'));
    while (!valid){
        if(typeof gridSize != 'number' || isNaN(gridSize)){
            gridSize = parseInt(prompt("Not a valid number. Enter a number up to 100."));
        }
        else if (gridSize <= 0 || gridSize > 100){
            gridSize = parseInt(prompt("New width/height must be between 1 and 100 squares."));
        }
        else{
            valid = true;
        }
    }
    removeGrid();
    createGrid(gridSize);
}

createGrid(gridSize);