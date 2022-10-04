// target grid, create a row div, insert 16 squares each, for 16 rows
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
            square.classList.add('grid-square');
            // square finished, append to row.
            row.appendChild(square);
        }

        // row finished, append it to grid.
        grid.appendChild(row);
    }
}

createGrid(16);