// target grid
let grid = document.querySelector("#grid");

/**
 * Creates an nxn grid of squares.
 * @param {Number} n    the number of rows and columns for the grid.
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

createGrid(16);
