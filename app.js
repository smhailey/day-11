let testStr = "There are several A's contained about this string."

//your code here

let letter = "a"
function letterCounter(testStr, letter) {
  let count = 0;
  for (let i = 0; i < testStr.length; i++) {
    if (testStr[i].toLowerCase() == letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}
letterCounter(testStr)