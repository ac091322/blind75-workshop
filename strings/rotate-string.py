"""
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
"""

# def rotate_string(s, goal):
#     if len(s) != len(goal):
#         return False

#     return goal in (s + s)


def rotate_string(s, goal):
    if len(s) != len(goal):
        return False

    # cannot do s.split("") because there are no empty spaces in the string
    # cannot do s.split() beacuse then it will return the entire string as one string in a list
    string_to_list = list(s)

    for i in range(0, len(s), 1):
        # must concat list with list, the type must be the same, cannot concat list with string character
        # slice creates a new list, appending [string_to_list[0]] creates a second list based off of the sliced list
        shifted_list = string_to_list[1::] + [string_to_list[0]]
        string_to_list = shifted_list

        if "".join(string_to_list) == goal:
            return True

    return False


print(rotate_string("abcde", "cdeab"))  # output: True
print(rotate_string("abcde", "abced"))  # output: False
