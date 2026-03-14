// pattern2.js
const TOTAL_ROWS = 5;

function generateRow(rowIndex) {
    const n = TOTAL_ROWS - rowIndex + 1; // number of elements
    const nums = [];

    if (rowIndex === 1) {
        // Top row fixed numbers
        nums.push(1, 4, 6, 4, 1);
    } else if (rowIndex === 2) {
        nums.push(1, 3, 3, 1);
    } else if (rowIndex === 3) {
        nums.push(1, 2, 1);
    } else if (rowIndex === 4) {
        nums.push(1, 1);
    } else {
        nums.push(1);
    }

    return nums;
}

// Print the pattern with proper leading spaces
for (let row = 1; row <= TOTAL_ROWS; row++) {
    const spaces = ' '.repeat(row - 1);
    const rowNumbers = generateRow(row);
    console.log(spaces + rowNumbers.join(' '));
}
