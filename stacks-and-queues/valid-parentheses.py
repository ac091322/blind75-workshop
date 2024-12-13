"""
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
"""


# brute force
# time complexity: O(n^2)
# space complexity: O(n)
def is_valid(s):
    # the while loop will keep removing adjacent pairs until none are left before exiting, it doesn't matter the order
    # the while loop mimics recursion, but is not actually recursive, giving it an O(n^2) time complexity
    while "()" in s or "{}" in s or "[]" in s:
        # strings are immutable, so everytime .replace() is called, a new string is created
        # each iteration creates a copy of the string, but only one copy is stored in memory at a time (overwriting s each time)
        s = s.replace("()", "")
        s = s.replace("{}", "")
        s = s.replace("[]", "")

    return s == ""


# stack
# time complexity: O(n)
# space complexity: O(n)
def is_valid(s):
    stack = []
    close_to_open = {")": "(", "]": "[", "}": "{"}

    for char in s:
        if char in close_to_open:

            if stack and stack[-1] == close_to_open[char]:
                stack.pop()
            else:
                return False

        else:
            stack.append(char)

    # works because we can see it this way: [] == True --> False, not False --> True
    # the expression is grouped as not ([] == True) rather than (not []) == True because the not operator has lower precedence thanthe == operator
    return True if not stack else False


print(is_valid("()"))  # output: true
print(is_valid("("))  # output: false
print(is_valid("()[]{}"))  # output: true
print(is_valid("(]"))  # output: false
print(is_valid("([])"))  # output: true
print(is_valid("([{}])"))  # output: true
print(is_valid("([)]"))  # output: false
print(is_valid("(){}}{"))  # output: false
