// "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

// Day 1 challenge
// https://blog.barbaralaw.me/huntober-2022-day-1

function hiddenMessage(str) {
    // str = str.replaceAll('0', 'O');
    // str = str.replaceAll('1', 'I');
    // str = str.replaceAll('2', 'Z');
    // str = str.replaceAll('3', 'E');
    // str = str.replaceAll('h', '4');
    // str = str.replaceAll('5', 'S');
    // str = str.replaceAll('6', 'G');
    // str = str.replaceAll('7', 'L');
    // str = str.replaceAll('B', '8');
    // str = str.replaceAll('q', '9');

    const decoder = {
      'O' : '0',
      '0' : 'O',
      '1' : 'I',
      'I' : '1',
      '2' : 'Z',
      'Z' : '2',
      '3' : 'E',
      'E' : '3',
      '4' : 'h',
      'h' : '4',
      '5' : 'S',
      'S' : '5',
      '6' : 'G',
      'G' : '6',
      '7' : 'L',
      'L' : '7',
      '8' : 'B',
      'B' : '8',
      '9' : 'q',
      'q' : '9',
    }

    let decodedMessage = '';
    for (let i = 0; i < str.length; i++) {
      decodedMessage += decoder[str.charAt(i)] || str[i]
    }
    return decodedMessage;
  }
  // 'e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs'

  // Day 2 challenge
  // https://blog.barbaralaw.me/huntober-2022-day-2

function removeBeforeC(str) {
    // Find the index of 'c' in str
    // Slice str from index of 'c' to the end and put it in a new variable
    // Remove every instance of 'Eek!' in the string
    // Split the string and reverse it, then join it again

    const c = str.indexOf('c');
    const strAfterC = str.slice(c);
    const removedEek = strAfterC.split('Eek!').join('');
    const reversedStr = removedEek.split('').reverse().join('');
    // Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task.
    const splitOnV = reversedStr.split('v');

    return splitOnV;
}

// Day 3 challenge
// https://blog.barbaralaw.me/huntober-2022-day-3

function replaceKey(str) {
  str = str.replaceAll('S', ' ');
  str = str.replaceAll('p', ' ');
  str = str.replaceAll('a', ' ');
  str = str.replaceAll('c', ' ');
  str = str.replaceAll('e', ' ');
  return str;
}

// Day 4 challenge 
// https://blog.barbaralaw.me/huntober-2022-day-4

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Day 5 challenge
// https://blog.barbaralaw.me/huntober-2022-day-5

function finalPunSubmissions(str) {
  // Split str into separate puns
  const submissions = str.split(',');
  // No empty spaces at the beginning and end of puns
  const noEmptySpaces = submissions.filter(pun => {
    if (pun === pun.trim()) {
      return pun;
    }
  });
  console.log('trimmed');
  console.log(noEmptySpaces);
  // Remove any instances of 'dog', 'bark', and 'bone' in lower or uppercase
  const dogSubmissions = noEmptySpaces.filter(pun => {
    if (pun.toLowerCase().includes('dog')) {
      return pun
    } else if (pun.toLowerCase().includes('bark')) {
      return pun;
    } else if (pun.toLowerCase().includes('bone')) {
      return pun;
    }
  });
  const noDogs = noEmptySpaces.filter(pun => !dogSubmissions.includes(pun));
  console.log('no dogs');
  console.log(noDogs);
  // Remove pun lengths that are multiple of 5
  const noMultiplesOf5 = noDogs.filter(pun => pun.length % 5 !== 0);
  console.log('no multiples of 5');
  console.log(noMultiplesOf5);
  // Sum of charCodes of first and last chars must be odd
  const oddCharCodeSum = noMultiplesOf5.filter(pun => (pun.charCodeAt(0) + pun.charCodeAt(pun.length - 1)) % 2 !== 0);
  console.log('odd char code sum');
  console.log(oddCharCodeSum);
  // Character after middle character in string cannot be 'e'
  const noMiddleE = oddCharCodeSum.filter(pun => {
    const middleCharIndex = Math.floor(pun.length / 2)
    if (pun.charAt(middleCharIndex + 1) !== 'e') {
      return pun
    }
  });
  console.log('no e after middle char');
  console.log(noMiddleE);
  // Must have an even number of lowercase letters
  const evenLowerCaseLetters = noMiddleE.filter(pun => {
    let lowerCaseLetters = 0
    const punLettersOnly = pun.replace(/[^a-zA-Z]+/g, '')

    for(let i = 0; i < punLettersOnly.length; i++) {
      if (punLettersOnly[i] === punLettersOnly[i].toLowerCase()) {
        lowerCaseLetters++
      }
    }
    if (lowerCaseLetters % 2 === 0) {
      return pun
    }
  });
  console.log('even amount of lower case');
  console.log(evenLowerCaseLetters);
  // Must have at least 2 capital letters
  const twoOrMoreCaps = evenLowerCaseLetters.filter(pun => {
    let capitalLetters = 0
    const punLettersOnly = pun.split(' ').join('')

    for(let i = 0; i < punLettersOnly.length; i++) {
      if (punLettersOnly[i] === punLettersOnly[i].toUpperCase()) {
        capitalLetters++
      }
    }
    if (capitalLetters >= 2) {
      return pun
    }
  });
  console.log('2 or more caps');
  console.log(twoOrMoreCaps);
  // Must not contain a capital 'S'
  const noCapitalS = twoOrMoreCaps.filter(pun => !pun.includes('S'));
  return noCapitalS;
}