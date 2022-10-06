// Day 1 challenge
// https://blog.barbaralaw.me/huntober-2022-day-1

function hiddenMessage(str) {
    str = str.replaceAll('0', 'O');
    str = str.replaceAll('1', 'I');
    str = str.replaceAll('2', 'Z');
    str = str.replaceAll('3', 'E');
    str = str.replaceAll('h', '4');
    str = str.replaceAll('5', 'S');
    str = str.replaceAll('6', 'G');
    str = str.replaceAll('7', 'L');
    str = str.replaceAll('B', '8');
    str = str.replaceAll('q', '9');
    return str;
  }

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