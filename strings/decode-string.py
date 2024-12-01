"""
https://leetcode.com/problems/decode-string/description/

Decode String
Medium

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

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
All the integers in s are in the range [1, 300].
"""


def decode_string(s: str) -> str:
    stack = []
    current_str = ""
    current_num = 0

    for char in s:
        if char.isdigit():
            # build the number for cases like "10[a]" or "100[a]""
            # because starting num is 0, will always get 0 + the actual num for the current num
            current_num = current_num * 10 + int(char)

        elif char == "[":
            # push current number and string onto the stack
            # intial stack with tuple value = [("", 3)]
            stack.append((current_str, current_num))
            current_str = ""  # reset current string
            current_num = 0  # reset current num

        elif char == "]":
            # pop the last number and string, repeat current_str
            # intial stack = [("", 3)]
            # prev_str = "", num = 3
            prev_str, num = stack.pop()
            # current_str = "" + 3 * "a" = "aaa"
            current_str = prev_str + num * current_str

        else:
            # add current character to the current string
            # after processing first character "a":
            # current_num = 0
            # current_str = "a"
            # stack = [("", 3)]
            current_str += char

    return current_str


print(decode_string("3[a]2[bc]"))  # output: "aaabcbc"
print(decode_string("3[a2[c]]"))  # output: "accaccacc"
print(decode_string("2[abc]3[cd]ef"))  # output: "abcabccdcdcdef"
