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