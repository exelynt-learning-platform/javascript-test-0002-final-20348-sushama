// pattern2.js
// Generates the decreasing number pattern using Pascal's triangle logic

const ROWS = 5; // Total rows

// Function to calculate binomial coefficient C(n, k)
function binomial(n, k) {
    let res = 1;
    for (let i = 0; i < k; i++) {
        res *= (n - i);
        res /= (i + 1);
    }
    return res;
}

// Function to print a single row with proper leading spaces
function printRow(numbers, spaces) {
    console.log(' '.repeat(spaces) + numbers.join(' '));
}

// Generate pattern
for (let i = ROWS; i >= 1; i--) {
    let rowNumbers = [];
    for (let j = 0; j < i; j++) {
        rowNumbers.push(binomial(i - 1, j));
    }
    printRow(rowNumbers, ROWS - i); // leading spaces for alignment
}
