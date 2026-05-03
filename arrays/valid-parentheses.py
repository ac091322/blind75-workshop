"""
Valid Parentheses
Easy

Time complexity: O(n)
Space complexity: O(n)

You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every closed bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:
Input: s = "[]"
Output: true

Example 2:
Input: s = "([{}])"
Output: true

Example 3:
Input: s = "[(])"
Output: false

Explanation: The brackets are not closed in the correct order.

Constraints:
1 <= s.length <= 1000
"""


def isValid(s: str):
    stack = []

    close_to_open = {")": "(", "}": "{", "]": "["}

    for char in s:
        if char not in close_to_open:
            stack.append(char)
        elif not stack or stack[-1] != close_to_open[char]:
            return False
        else:
            stack.pop()

    return len(stack) == 0


print(isValid("([{}])"))
