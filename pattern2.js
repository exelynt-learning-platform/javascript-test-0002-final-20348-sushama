// pattern2.js

// Number of rows
const ROWS = 5;

function printRow(nums, spaces) {
    let line = ' '.repeat(spaces) + nums.join(' ');
    console.log(line);
}

// Generate pattern
for (let i = 0; i < ROWS; i++) {
    let rowNumbers = [];

    // Build the row numbers
    for (let j = 1; j <= ROWS - i; j++) {
        if (j === 1) {
            rowNumbers.push(1);
        } else if (j === ROWS - i) {
            rowNumbers.push(1);
        } else {
            rowNumbers.push(j + i); // Decreasing logic inside
        }
    }

    // Print row with leading spaces
    printRow(rowNumbers, i);
}
