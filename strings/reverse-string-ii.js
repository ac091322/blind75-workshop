/*
https://leetcode.com/problems/reverse-string-ii/description/

Reverse String II
Easy

Given a string s and an integer k, reverse the first k characters for every 2k (2k means 2 consecutive) characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Example 2:
Input: s = "abcd", k = 2
Output: "bacd"

Constraints:
1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104
*/


function reverseString(s, k) {
    let result = s.split("");

    for (let i = 0; i < s.length; i += 2 * k) {
        let slicedAndReversed = result.slice(i, i + k).reverse();
        // remove starting from the i or 0 index, go up to but not inclusive of the k or 2 index (from 0 to 1), and then insert in place by spreading the sliced part
        result.splice(i, k, ...slicedAndReversed);
    }

    return result.join("");
}


console.log(reverseString("abcdefg", 2));  // output: "bacdfeg"
console.log(reverseString("abcdefg", 3));  // output: "cbadefg"
console.log(reverseString("abcd", 2));  // output: "bacd"
console.log(reverseString("ab", 3));  // output: "ba"
