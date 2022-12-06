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

// 11/7/22
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

function findDeletedNum(arr, mixedArr) {
    // If arr.length and mixedArr.length are the same, then return 0
    // Sort the mixedArr in ascending order
    // Make a for loop to compare arr[i] with mixedArr[i]
    // If they are no equal, return the value of arr[i]

    if (arr.length === mixedArr.length) {
        return 0;
    }

    const mixedArrSorted = mixedArr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== mixedArrSorted[i]) {
            return arr[i];
        }
    }

}

console.log(findDeletedNum([1, 2, 3, 4, 5], [3, 1, 4, 5]), 2);
console.log(findDeletedNum([3, 4, 5, 6, 7, 8], [5, 4, 6, 3, 8]), 7);
console.log(findDeletedNum([20, 21, 22, 23, 24, 25], [25, 20, 24, 23, 22]), 21);

// 11/9/22
// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

function arrayDiff(a, b) {
    // If a or b is empty, return the opposite array
    // Filter a for elements not in b
    if (a.length === 0 || b.length === 0) {
        return a;
    } else {
        return a.filter(num => !b.includes(num));
    }

}

console.log(arrayDiff([1, 2, 2, 3, 4], [2]), [1, 3, 4]);
console.log(arrayDiff([1, 2], [2]), [1]);
console.log(arrayDiff([1, 3, 6], []), [1, 3, 6]);

// 11/14/22
// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function middleNum(arr) {
    // Sort the array
    // Grab the middle element
    // Find the index of that element in arr

    const middle = [...arr].sort((a, b) => a - b)[1]
    
    return arr.indexOf(middle);
}

console.log(middleNum([3, 1, 2]), 2);
console.log(middleNum([4, 1, 20]), 0);
console.log(middleNum([20, 15, 4]), 1);

// 11/15/22
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

function sortArray(arr) {
    // Make an array with only the odd numbers
    // Sort that array in ascending order
    // Loop through the original array. If it's odd, replace that number with the first element in the oddNums array. Then remove the number from that oddNums array.

    const oddNumsSorted = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);

    // return arr.map(num => {
    //     if (num % 2 !== 0) {
    //        return oddNumsSorted.shift();
    //     } else {
    //         return num;
    //     }
    // });

    return arr.map(num => num % 2 !== 0 ? oddNumsSorted.shift() : num);
}

console.log(sortArray([7, 1]), [1, 7]);
console.log(sortArray([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4]);
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]);

// 11/17/22
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

function averageLength(arr) {
    // Map a new array with the length of each element in arr
    // Add the lengths of all the elements, then divide by the number of elements to find the average
    // Round that number to the nearest number
    // Map a new array repeating the element letter by the average number

    const arrLengthSum = arr.map(el => el.length).reduce((total, num) => total += num, 0);
    const average = Math.round(arrLengthSum / arr.length);

    return arr.map(el => el[0].repeat(average));
}

console.log(averageLength(['u', 'y']), "['u' 'y']");
console.log(averageLength(['aa', 'bbb', 'cccc']), "['aaa', 'bbb', 'ccc']");
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), "['aaa', 'bbb', 'ddd', 'eee']");

// 11/21/22
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutive(str) {
    // Split str into separate elements
    // Make a loop and compare the current element with the next element
    // If they match, remove the current element
    // Join the final result

    const splitStr = str.split(' ');
    // const newArr = [];

    // for (let i = 0; i < splitStr.length; i++) {
    //     if (splitStr[i] !== splitStr[i+1]) {
    //         newArr.push(splitStr[i])
    //     }
    // }
    
    // return newArr.join(' ');

    
}

console.log(removeConsecutive("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "(alpha beta gamma delta alpha beta gamma delta)");
console.log(removeConsecutive("alpha alpha alpha alpha"), "(alpha)");
console.log(removeConsecutive("alpha alpha beta alpha gamma gamma beta delta"), "(alpha beta alpha gamma beta delta)");

// 11/29/22
// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

function removeConsecutiveDuplicates(arr) {
    // Split each element into individual letters
    // Check if the next element is the same as the current element, and remove the current one if it is
    // Join the letters back together

    return arr.map((word) => word.split('').filter((letter, index, array) => letter !== array[index + 1]).join(''));
}

console.log(removeConsecutiveDuplicates(['abracadabra', 'allottee', 'assessee'], "['abracadabra', 'alote', 'asese']"));
console.log(removeConsecutiveDuplicates(['kelless', 'keenness'], "['keles', 'kenes']"));

// 11/30/22
// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function absentVowel(str){
    // Make an array of vowels
    // Lowercase x
    // Iterate through the vowels array, and check if the current vowel is in x
    // If the current vowel is missing, return the index
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < vowels.length; i++) {
      if (!str.includes(vowels[i])) {
        return i;
      }
    }
  }

console.log(absentVowel('John Doe hs seven red pples under his bsket'), '0');
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles'), '3');

// 12/1/22
// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(n) {
    // Make a loop from 1 to n
    // If divisible by 2, console.log 'Fizz'
    // If number is divisible by 3, console.log 'Buzz'
    // If number is divisible by 2 and 3, console.log Fizz Buzz

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log('Fizz Buzz');
        } else if (i % 2 === 0) {
            console.log('Fizz');
        } else if (i % 3 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(3), '2: Fizz, 3: Buzz');
console.log(fizzBuzz(12), '2: Fizz, 3: Buzz, 4: Fizz, 6: Fizz Buzz, 8: Fizz, 9: Buzz 10: Fizz, 12: Fizz Buzz');

// 12/2/22
// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

function reverseStr(str) {
    // Make a for-loop starting at the last number in str length
    // Add each letter starting backwards to a new variable

    let reversed = '';

    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed = reversed + str[i];
    // }

    // return reversed;

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

console.log(reverseStr('hello'), 'olleh');
console.log(reverseStr('racecar'), 'racecar');
console.log(reverseStr('december'), 'rebmeced');

// 12/5/22
// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function charCount(str) {
    str = str.split('');
    counts = {};
    
    for (const char of str) {
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }

    return counts;
}

console.log(charCount('aba'), "{'a': 2, 'b': 1}");
console.log(charCount('hello'), "{'e': 1, 'h': 1, 'l': 2, 'o': 1}");
console.log(charCount('abba'), "{'a': 2, 'b': 2}");

// 12/6/22
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

const numJewelsInStones = function(jewels, stones) {
    // Split jewels and stones into individual elements
    // Find the occurrences in stones and store them in an object
    // Find the jewels in the stoneCount object and add them together
    
    jewels = jewels.split('');
    stones = stones.split('');
    const stoneCount = {};
    let totalJewels = 0;

    
    for (const stone of stones) {
        stoneCount[stone] = stoneCount[stone] ? stoneCount[stone] + 1 : 1;
    }

    jewels.forEach(jewel => {
        stoneCount[jewel] ? totalJewels += stoneCount[jewel] : totalJewels;
    });

    return totalJewels;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'), '3');
console.log(numJewelsInStones('z', 'ZZ'), '0');