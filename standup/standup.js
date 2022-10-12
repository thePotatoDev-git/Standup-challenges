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