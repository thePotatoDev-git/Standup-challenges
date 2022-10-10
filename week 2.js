// Day 1
// https://blog.barbaralaw.me/huntober-2022-day-8
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

function checkEquality(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// Day 2
// https://blog.barbaralaw.me/huntober-2022-day-9

function moveLeft(arr, value) {
    // If value is equal to arr[0], then return arr
    // Take the value and find its matching element in arr
    // Splice that element and move it one space to the left

    arr.forEach((el, i) => {
        if (value === arr[0]) {
            return arr;
        }
        if (el === value) {
            arr.splice(i, 1);
            arr.splice(i-1, 0, el)
        }
    });
    return arr;
}

function moveRight(arr, value) {
    arr.forEach((el, i) => {
        if (value === arr[arr.length - 1]) {
            return arr;
        }
        if (el === value) {
            arr.splice(i, 1);
            arr.splice(i+1, 0, el);
        }
    });
    return arr;
}