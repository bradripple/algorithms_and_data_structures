// Write a function which takes in a string and returns counts of each character in the string.

// 1. Can I restate the problem in my own words?
"count the characters that are included in the string"

// 2. What are the inputs that go into the problems?
// Should I account for spaces? Capitalized letters? Numbers? Special characters?
"only alphanumric and lowercase characters"

// 3. What are the outputs that should come from the solution to the problem?

// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h:1, e:1, l:2, o:1}

// "my phone number is 8082389988"
// "Hello Hi"
// charCount("")

// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?

// 5. How should I label the important pieces of data that are a part of the problem?

// function charCount(str) {
//     // do something
//     // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
// }

// function charCount(str) {
//     // make object to return at end
//     // loop over string, for each character...
//         // if the char is a number/letter AND a key in object, add one to count
//         // if the char is a number/letter AND not in object, add it to object and set value to 1 
//         // if character is something else (space, period, etc.) don't do anything
//     // return  object at end
// }

function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string, for each character...
    for (let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND a key in object, add one to count
        if(result[char] > 0) {
            result[char]++;
            // if the char is a number/letter AND not in object, add it to object and set value to 1 
        } else {
            result[char] = 1;
        }
    }
        // if character is something else (space, period, etc.) don't do anything
    // return  object at end
    return result;
}

console.log(charCount("Hi there!"));