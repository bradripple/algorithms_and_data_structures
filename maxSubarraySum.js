/** Write a function called - maxSubarraySum - which accepts an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive elements in the array.
*/

// 1. Can I restate the problem in my own words?
// Create a function that takes an array of numbers and a number that represents a range. Then add the numbers of the given range to 
// determine which combination is the highest value and return that

// 2. What are the inputs that go into the problems?
// Should I account for spaces? Capitalized letters? Numbers? Special characters?


// 3. What are the outputs that should come from the solution to the problem?
// the highest sum of the numbers added in the range given

// maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
// maxSubarraySum([4,2,1,6], 1) // 6
// maxSubarraySum([], 4) // null

// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?

// 5. How should I label the important pieces of data that are a part of the problem?


maxSubarraySum = (arr, n) => {
    if (n > arr.length) {
        return null;
    }

    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));