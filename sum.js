function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum([1, 2, 3, 4, 5]));

// O(1) Space - constant