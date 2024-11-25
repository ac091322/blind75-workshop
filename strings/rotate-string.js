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


// function rotateString(s, goal) {
//     if (s.length !== goal.length) return false;
//     return (s + s).includes(goal);
// }


function rotateString(s, goal) {
    if (s.length !== goal.length) return false;

    let stringToArr = s.split("");

    for (let _ = 0; _ < stringToArr.length; _ += 1) {
        // create a new array by slicing at index 1 to the end of the array
        // then append char at index 0 of the original array to the end of the new array from .slice(), creating a second new array
        let shiftedArr = stringToArr.slice(1).concat(stringToArr[0]);
        // in js can directly append a string char to the end of an array, but not in py

        stringToArr = shiftedArr;  // replace the entire original array with the new array

        if (shiftedArr.join("") === goal) return true;
    }

    return false;
}


console.log(rotateString("abcde", "cdeab"));  // output: true
console.log(rotateString("abcde", "abced"));  // output: false
