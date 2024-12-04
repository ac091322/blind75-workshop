/*
https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/

Maximum Score After Splitting a String
Easy

Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

Example 1:
Input: s = "011101"
Output: 5
Explanation:
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5
left = "01" and right = "1101", score = 1 + 3 = 4
left = "011" and right = "101", score = 1 + 2 = 3
left = "0111" and right = "01", score = 1 + 1 = 2
left = "01110" and right = "1", score = 2 + 1 = 3

Example 2:
Input: s = "00111"
Output: 5
Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

Example 3:
Input: s = "1111"
Output: 3

Constraints:
2 <= s.length <= 500
The string s consists of characters '0' and '1' only.


Approach: prefix-suffix
1. set left zeroes to 0, which is an empty left substring
2. set right ones to the number of 1s in the string
3. set max score to 0
4. iterate through the string:
  4.1. if it's a 0, increase left zeroes by 1 and do nothing with right ones
  4.2. if it's not a 0, decrease right ones by 1, and do nothing with left zeroes
  4.3. update max score to be the number of left zeroes + the number of right ones
5. return the max score

Walkthrough: "011101"
left part: 0, left zeros: 1, right part: 11101, right ones: 4, total: 5
left part: 01, left zeros: 1, right part: 1101, right ones: 3, total: 4
left part: 011, left zeros: 1, right part: 101, right ones: 2, total: 3
left part: 0111, left zeros: 1, right part: 01, right ones: 1, total: 2
left part: 01110, left zeros: 2, right part: 1, right ones: 1, total: 3

Time complexity: O(n) where n is the length of the string
Space complexity: O(n) where the list could contain n elements after splitting
*/


function maxScore(str) {
    let leftZeroes = 0;

    // split the strings on the 1s: "011101" --> [ '0', '', '', '0', '' ]
    // the number of 1s is always one less than the number of pieces the string split into
    let rightOnes = str.split("1").length - 1;

    // let array = str.split("")
    // let rightOnes = array.filter(ele => ele === "1").length

    let maxScore = 0;

    for (let i = 0; i < str.length - 1; i += 1) {
        if (str[i] === "0") {
            leftZeroes += 1
        } else {
            rightOnes -= 1
        }
        maxScore = Math.max(maxScore, leftZeroes + rightOnes);
    }

    return maxScore;
}


console.log(maxScore("00010000"));  // output: 6
console.log(maxScore("011101"));  // output: 5
console.log(maxScore("00111"));  // output: 5
console.log(maxScore("1111"));  // output: 3
console.log(maxScore("00000"));  // output: 4
console.log(maxScore("0101010101"));  // output: 6
