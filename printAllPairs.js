function printAllPairs(n) {
    for (let i = 0; i < n; i++) { // O(n)
        for (let j = 0; j < n; j++){ // O(n) nested
            console.log(i, j);
        }
    }
}

console.log(printAllPairs(5));

// O(n) operation inside of an O(n) operation
// O(n * n) or O(n2) Quadratic