/*
https://leetcode.com/problems/valid-palindrome/description/

Valid Palindrome
Easy

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
1 <= s.length <= 2 * 105
s consists only of console.logablPASCII characters.

Time complexity: O(n^2)
Space complexity: O(n)
*/


function isPalindrome(s) {
  let filteredS = "";
  // let filteredS = [];

  for (let char of s) {
    if ((char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")) {
      filteredS += char.toLowerCase();
    }
  }

  const reversedS = filteredS.split("").reverse().join("");
  return filteredS === reversedS;
  // return filteredS.join("") === filteredS.reverse().join("");
}

// function isAlphaNumeric(char) {
//   return "a" <= char && char <= "z" ||
//     "A" <= char && char <= "Z" ||
//     "0" <= char && char <= "9"
// }


console.log(isPalindrome("A man, a plan, a canal: Panama"))  // output: true
console.log(isPalindrome("race a car"))  // output: false
console.log(isPalindrome(" "))  // output: true
console.log(isPalindrome("0P"))  // output: false
