/*
https://leetcode.com/problems/valid-parentheses/description/
https://neetcode.io/problems/validate-parentheses

Valid Parentheses
Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'


Approach: stacks and queues
I: string of just "(", ")", "{", "}", "[", and "]" characters
O: boolean

1. create a stack variable to temporarily hold the characters
2. create a dictionary that will use the closing bracket as the key, and the opening bracket as the value
2. iterate through the string:
    2.1. if the character is an opening bracket of any type, push it onto the stack, all opening brackets will go onto the stack
    2.2. if the character is a key in the dictionary, it is a closing bracket
        2.2.1. check if there is a stack (for edge cases that start with closing brackets)
        2.2.2. check if the last character in the stack is equal to the value of the key in the dictionary
        2.2.3. if it is, pop the last character from the stack because it means we found a valid pair
3. return true if the length of the stack is 0, else false

Time complexity: O(n)
Space complexity: O(n)
*/


// brute force
// time complexity: O(n^2)
// space complexity: O(n)
function isValid(s) {
    while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
        s = s.replace("()", "");
        s = s.replace("{}", "");
        s = s.replace("[]", "");
    }

    return s === "";
}

// stack
// time complexity: O(n)
// space complexity: O(n)
function isValid(s) {
    let stack = [];
    let closeToOpen = { ")": "(", "}": "{", "]": "[" }

    for (let char of s) {
        if (char in closeToOpen) {

            // better to check the length of the stack instead of just stack to account for empty arrays [] which are truthy in js
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                stack.pop();
            } else {
                return false;
            }

        } else {
            stack.push(char);
        }
    }

    // !stack does not work because it converts an empty array [], which is truthy, into a falsey
    // [] === true --> truthy === true --> false
    // ![] === true --> false === true --> false
    // in js the ! operator has precedence over the === operator, so it will first evaluate ![] to false, then compare false === true
    return stack.length === 0 ? true : false;
}


console.log(isValid("()"));  // output: true
console.log(isValid("("));  // output: false
console.log(isValid("()[]{}"));  // output: true
console.log(isValid("(]"));  // output: false
console.log(isValid("([])"));  // output: true
console.log(isValid("([{}])"));  // output: true
console.log(isValid("([)]"));  // output: false
console.log(isValid("(){}}{"));  // output: false
