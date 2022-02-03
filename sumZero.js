// Write a function called sumZero which accepts a sorted array of integers. The function should find the 
// first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// 1. Can I restate the problem in my own words?


// 2. What are the inputs that go into the problems?
// Should I account for spaces? Capitalized letters? Numbers? Special characters?
'a sorted array'


// 3. What are the outputs that should come from the solution to the problem?

// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?

// 5. How should I label the important pieces of data that are a part of the problem?


// sumZero = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log('i', [i])
//         for (let j = i+1; j < arr.length; j++) {
//             console.log('j', [j])
//             if(arr[i] + arr[j]  === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// Refactored using multiple pointers
// sumZero = (arr) => {
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right) {
//         let sum = arr[left] + arr[right];
//         console.log(left, right);
//         if (sum === 0) {
//             return [arr[left], arr[right]];
//         } else if (sum > 0) {
//             right--;
//         }else {
//             left++;
//         }
//     }
// }

// sumZero = (arr) => {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             return [arr[left], arr[right]];
//         } else if (sum > 0) {
//             right--;
//         } else { 
//             left++;
//         }
//     }
// }


sumZero = (arr) => {
    // set two pointers
    let left = 0;
    let right = arr.length - 1;
    //create a while loop to compare left & right
    while (left < right) {
        // create a variable to track the sum of both numbers
        let sum = arr[left] + arr[right];
        // set conditionals to check if sum is zero
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

 
console.log(sumZero([-4,-3,-2,-1, 0, 1, 2, 5]));