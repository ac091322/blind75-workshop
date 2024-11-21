/*
https://leetcode.com/problems/rotate-string/description/

Rotate Strings
Easy

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.


Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false


Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
*/


function rotateString(s, goal) {
    let shiftedArray = []

    let i = 0;
    while (i < s.length) {
        shiftedArray.push(s.pop())
        i += 1
    }

    console.log(shiftedArray)
}


console.log(rotateString("abcde", "cdeab"));  // output: true
console.log(rotateString("abcde", "abced"));  // output: false
