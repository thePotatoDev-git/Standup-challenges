// 10/12/22
// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// Use a loop to go through every number from 1 to n - for loop
// If a number is divisible by 3 and 5, console.log Fizz Buzz
// If a number is divisible by 3, console.log Fizz
// If a number is divisible by 5, console.log Buzz
// If a number isn't divisible by 3 or 5, console.log the number

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('Fizz Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// 10/13/22
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

function domainName(url){
    // Replace all www, http, and https with an empty string
    // Split url with '.'
    // Return the first element in url

    url = url.replace('www.', '');
    url = url.replace('http://', '');
    url = url.replace('https://', '');
    url = url.split('.');

    return url[0];
}

// 10/18/22
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

// Iterate through all numbers and convert them to a number
// Get the sum of all the numbers

function sumMix(arr) {
    return arr.reduce((total, num) => total += Number(num), 0);
}

// 10/19/22
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

function getAverage(arr) {
    // Find the sum of all the elements
    // Divide that sum by the length of the array
    // Round it down to the nearest integer

    const average = arr.reduce((total, num) => total += num, 0) / arr.length;

    return Math.floor(average);
}

// 10/20/22
// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

function repeats (arr) {
    // Make an empty array
    // Loop through the array, and if the number is repeated, push it into the empty array
    // Filter arr to not include the repeated numbers

    const repeated = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            repeated.push(arr[i]);
        }
    }
    
    return arr.filter(num => !repeated.includes(num)).reduce((total, num) => total += num, 0);
}

// 10/21/22
// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenEndNums(arr, n) {
    // Filter out all odd numbers in the array
    // Grab the last n numbers from the even nums array

    const evenNums = arr.filter(num => num % 2 === 0); 

    return evenNums.slice(-n);
}

// 10/25/22
// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

function uniqueArrays(arr) {
    // Remove duplicate numbers in each sub array
    // Count the length of each sub array
    // Multiply the lengths of each sub array

    const removeDupes = arr.map(subArr => [...new Set(subArr)].length);

    return removeDupes.reduce((total, num) => total *= num);
}

// 10/26/22
// Given an array of integers , Find the Nth smallest element in this array of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

function smallestNth(arr, n) {
    // Sort arr in ascending order
    // Grab the element in nth position
    
    const sortedArr = arr.sort((a, b) => a - b);

    return sortedArr[n - 1];
}

// 10/27/22

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(str){
    // Lowercase word to make it case insensitive
    // Split the word into individual elements, forming an array
    // Iterate through the array and check if the index is the same as the last index
    // If an element shares the same index, turn it into a '('
    // If an element doesn't have the same index and lastIndex, turn it into a ')'
    // Return the joined array
    const splitWord = str.toLowerCase().split('');
    
    // const encoded = splitWord.map(char => {
    //   if (splitWord.indexOf(char) === splitWord.lastIndexOf(char)) {
    //     return '(';
    //   } else {
    //     return ')';
    //   }
    // })
    
    // return encoded.join('');

    let counts = {};

    for (el of splitWord) {
        counts[el] = counts[el] ? counts[el] + 1 : 1
    }

    return splitWord.map(char => {
        return counts[char] > 1 ? ')' : '(';
    }).join('');
}

// 11/1/2022
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function strTransform(str) {
    // Only a string. No numbers, booleans, or any other funny business
    // Returns just a single string with cases opposite from the original. The result will have words reversed, not the whole string and characters reversed.

    // Split str into individual chars
    // Iterate through each string and check their cases
    // If it is lowerCase, change to upperCase and vice versa
    // Join the array
    // Split it again by spaces, then reverse, and join by spaces 

    str = str.split('');

    const oppositeCase = str.map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join('');

    return oppositeCase.split(' ').reverse().join(' ');
}

console.log(strTransform('Input Example')) // eXAMPLE iNPUT
console.log(strTransform('GOOD MORNING')) // 'morning good'
console.log(strTransform('WhAtS gOiNg On!!!')) // oN!!! GoInG wHaTs

// 11/2/2022
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

function lastCharSort(str) {
    // Split str into an array of words
    // Grab the last letter of each word and sort by those letters

    str = str.split(' ');
    return str.sort((a, b) => a[a.length - 1] < b[b.length - 1] ? -1 : 1)
}