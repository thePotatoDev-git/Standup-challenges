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
            const bSplice = b[i];
            const aSplice = a[i];
            a.splice(i, 1, bSplice);
            b.splice(i, 1, aSplice);
        }
    });
    c.forEach((el, i) => {
        if (el === value) {
            const cSplice = c[i];
            const bSplice = b[i];
            b.splice(i, 1, cSplice);
            c.splice(i, 1, bSplice);
        }
    });
    return arr;
}

function moveDown(arr, value) {
    const [a, b, c] = arr;
    
    b.forEach((el, i) => {
        if (el === value) {
            const bValue = b[i];
            const cValue = c[i];
            b.splice(i, 1, cValue);
            c.splice(i, 1, bValue);
        }
    });
    a.forEach((el, i) => {
        if (el === value) {
            const aValue = a[i];
            const bValue = b[i];
            a.splice(i, 1, bValue);
            b.splice(i, 1, aValue);
        }
    });
    return arr;
}

// Day 5
// https://blog.barbaralaw.me/huntober-2022-day-12

function shuffleGrid(arr) {
    // Create empty arrays for all values "allValues" and the final randomized result "randomized"
    // Use the spread operator to push all values into allValues
    // Randomize the elements in allValues
    // Put the number of values matching the same number length of an array in the original arr and push them into the "randomized" array
    // Return the final result

    const allValues = [];
    const tempGrid = [];

    arr.forEach(el => allValues.push(...el))
    allValues.sort(() => Math.random() - 0.5)
    
    while (allValues.length > 0) {
        const splitUp = allValues.splice(0, arr[0].length)
        tempGrid.push(splitUp);
    }
    
    return tempGrid;
}

// Day 6
// https://blog.barbaralaw.me/huntober-2022-day-13

// https://codepen.io/thePotatoDev/pen/rNvRwwN