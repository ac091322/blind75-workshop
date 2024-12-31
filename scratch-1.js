/*
https://leetcode.com/problems/decode-string/description/

Decode String
Medium

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well - formed, etc.Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:
1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range[1, 300].


    Approach:
1. create a variable to be the stack that will hold the current string and current num(initialize to empty stack)
2. create a variable to hold the current string extracted from the input string(initialize to empty string)
3. create a variable hold the current number extracted from the input string(start from 0)
4. iterate through the input string:
4.1.if char is a digit, account for numbers like 10 or 100 by multiplying by 10, then replace current num with char after converting to integer
4.2.if char is a char from a to z, concat with currenct string
4.3.if char is the opening square bracket, append the stack with the current string and current num as a tuple and reset the current string and current num
4.4.if char is the closing square bracket, pop from the stack, destructure the values, and set the current string to the previous string + current string * the previous number
5. return the current string

Time complexity: O(n) where n represents the number of characters in the string
Space complexity: O(n) where n represents the number of characters in the string
*/


function decodeString(s) {

}


console.log(decodeString("3[a]2[bc]"));  // output: "aaabcbc"
console.log(decodeString("3[a2[c]]"));  // output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef"));  // output: "abcabccdcdcdef"
