/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replaceAll(" ", "").replaceAll(",", "").replaceAll(".", "")
           .replaceAll("!", "").replaceAll("?", "");

  for (let i = 0; i < str.length/2; i++) {
    const [ch1, ch2] = [str[i], str[str.length - i -1]];

    if (ch1.toLowerCase() !== ch2.toLowerCase()) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
