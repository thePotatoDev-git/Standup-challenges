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

// Day 3
// https://blog.barbaralaw.me/huntober-2022-day-10

function aToFront3ToBack (arr) {
    // Filter out arr with elements that have 'a'
    // Filter out arr with elements that have more than 3 letters
    // Concat the above variables

    const hasA = [];
    const over3 = [];
    const everythingElse = [];

    arr.forEach((el, i) => {
        if (el.includes('a')) {
            hasA.push(el);
        } else if (el.length > 3) {
            over3.push(el);
        } else {
            everythingElse.push(el);
        }
    });

    return [...hasA, ...everythingElse, ...over3];
}

// Day 4
// https://blog.barbaralaw.me/huntober-2022-day-11

function moveUp(arr, value) {
    const [a, b, c] = arr;
    
    b.forEach((el, i) => {
        if (el === value) {
            const bSplice = b.splice(i, 1);
            const aSplice = a.splice(i, 1);
            a.splice(i, 0, bSplice[0]);
            b.splice(i, 0, aSplice[0]);
        }
    });
    c.forEach((el, i) => {
        if (el === value) {
            const cSplice = c.splice(i, 1);
            const bSplice = b.splice(i, 1);
            b.splice(i, 0, cSplice[0]);
            c.splice(i, 0, bSplice[0]);
        }
    });
    return arr;
}

function moveDown(arr, value) {
    const [a, b, c] = arr;
    
    b.forEach((el, i) => {
        if (el === value) {
            const bValue = b.splice(i, 1);
            const cValue = c.splice(i, 1);
            b.splice(i, 0, cValue[0]);
            c.splice(i, 0, bValue[0]);
        }
    });
    a.forEach((el, i) => {
        if (el === value) {
            const aValue = a.splice(i, 1);
            const bValue = b.splice(i, 1);
            a.splice(i, 0, bValue[0]);
            b.splice(i, 0, aValue[0]);
        }
    });
    return arr;
}