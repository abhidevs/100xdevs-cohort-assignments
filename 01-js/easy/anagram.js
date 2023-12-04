/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  
  const occurrences1 = {}, occurrences2 = {};

  for (let i = 0; i < str1.length; i++) {
    const [l1, l2] = [str1[i].toLowerCase(), str2[i].toLowerCase()];

    if (!occurrences1[l1]) {
      occurrences1[l1] = 0;
    }

    if (!occurrences2[l2]) {
      occurrences2[l2] = 0;
    }
    
    occurrences1[l1]++;
    occurrences2[l2]++;
  }

  if (Object.entries(occurrences1).length !== Object.entries(occurrences2).length) {
    return false;
  }

  for (const letter in occurrences1) {
    if (occurrences1[letter] !== occurrences2[letter]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
