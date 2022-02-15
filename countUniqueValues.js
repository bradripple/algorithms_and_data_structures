// Accepts sorted array, and counts the unique values in the array - There can be negative numbers in the array, but it will always be sorted

// countUniqueValues = (arr) => {
//     if(arr.length === 0){
//         return 0;
//     }
//     let i = 0;
//     for(var j = 1; j < arr.length; j++) {
//         if(arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j];
//         }
//         // console.log(i,j);
//     }
//     return arr[i] + 1;
// }

countUniqueValues = (arr) => {
    // check to see if arr is empty - if so return 0
    if(arr.length === 0) {
        return 0;
    }

    // create first pointer to compare second pointer to
    let i = 0;

    // iterate throught the rest of the array starting at index 1
    for(let j = 1; j < arr.length; j++) {
        // check to see if i and j dont match
        if(arr[i] !== arr[j]) {
            // if not a match add one to i and change the value to match j
            i++;
            arr[i] = arr[j];
        }
    }
    // return value of i plus 1 to give total value of arr of unique values
    return i + 1;
}

console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6,8]))