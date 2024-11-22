/*
https://leetcode.com/problems/shuffle-string/description/

Suffled String
Easy

You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

Example 1:
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
--> see diagram

Example 2:
Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.


Constraints:
s.length == indices.length == n
1 <= n <= 100
s consists of only lowercase English letters
0 <= indices[i] < n
All values of indices are unique.
*/

function restoreString(s, indices) {
    let indexBucket = new Array(s.length).fill("")

    for (let i = 0; i < s.length; i += 1) {
        let char = s[i]
        let index = indices[i]
        indexBucket[index] = char
    }

    return indexBucket.join("")

}


console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));  // output: "leetcode"
console.log(restoreString("abc", [0, 1, 2]));  // output: "abc"
