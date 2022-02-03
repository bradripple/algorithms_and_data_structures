// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of antoher, such as cinema, formed from iceman


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


// function validAnagram(first, second) {
//     if(first.length !== second.length) {
//         return false;
//     }

//     let lookup = {};
//     for(let i = 0; i < first.length; i++) {
//         let letter = first[i];
//         // if letter exists, increment, otherwise set to 1
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log('first lookup', lookup);
    
//     for(let i = 0; i < second.length; i++) {
//         let letter = second[i];
//         // can't find letter or letter is zero then it's not an anagram
//         if(!lookup[letter]) {
//             return false;
//         } else {
//             lookup[letter] -= 1;
//         }
//     }
//     console.log('second lookup', lookup);

//     return true;
// }


// function validAnagram(first, second) {
//     if(first.length !== second.length) {
//         return false;
//     }

//     lookup = {};
//     for(let i = 0; i < first.length; i++){
//         letter = first[i];
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log('lookup1', lookup)

//     for(let i = 0; i < second.length; i++) {
//         letter = second[i];
//         if(!lookup[letter]) {
//             return false;
//         } else {
//             lookup[letter] -= 1;
//         }
//     }
//     return true;
// }


// validAnagram = (first, second) => {
//     // compare lengths to confirm frequency
//     if(first.length !== second.length) {
//         return false;
//     }

//     // create an object to track values of letters in the string
//     let lookup = {};
//     for (let i = 0; i < first.length; i++) {
//         let letter = first[i];
//         // add letter to object with value of 1 or add 1 to value if already exists
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     // conosle log to confirm things are working
//     console.log(lookup);

//     // loop through the second string
//     for (let i = 0; i < second.length; i++) {
//         let letter = second[i];
//         // first check if seconds letter is found in first
//         if (!lookup[letter]) {
//             // if letter is not found 
//             return false;
//         } else {
//             lookup[letter] -= 1;
//         }
//     }

//     return true;
// }


// validAnagram = (first, second) => {
//     // check to confirm both strings have the same frequency
//     if (first.length !== second.length) {
//         return false;
//     }

//     // create an object to track letters value in string
//     let lookup = {};

//     // loop through first string to add each letter to lookup objects value
//     for (let i = 0; i < first.length; i++) {
//         let letter = first[i];
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup);

//     // loop through the second string to compare to lookup object
//     for (let i = 0; i < second.length; i++ ) {
//         let letter = second[i];

//         // check if letter is in lookup object
//         if (!lookup[letter]) {
//             return false;
//         } else {
//             lookup[letter] -= 1;
//         }
//     }

//     return true;
// }



vaildAnagram = (first, second) => {
    // check to make sure both strings have a matching frequency
    if(first.length !== second.length) {
        return false;
    }

    // create object to track letters values
    let lookup = {};

    // loop through first string to add letter values to lookup object
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup);

    // loop through the second string to compare to letter values in lookup object
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // check to see if letter has value in lookup object, if not return false
        if(!lookup[letter]) {
            return false;
        } else {
            // if letter has value - 1
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log(validAnagram('anagrams', 'nagarams'))