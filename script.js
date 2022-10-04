// target grid, create a row div, insert 16 squares each, for 16 rows
let grid = document.querySelector("#grid");

/**
 * Creates a 16x16 grid of squares.
 */
function createGrid(){
    // 16 times, append a "row" as a child.
    for (let i = 0; i < 15; i++){
        // create an element, row, give it class grid-row.
        const row = document.createElement('div');
        row.classList.add('grid-row');

        // 16 times, append a "square" as a child.
        for (let i = 0; i < 15; i++){
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

createGrid();