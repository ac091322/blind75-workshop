"""
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


Time complexity: O(n)
Space complexity: O(n)
"""


def reverse_string(s, k):
    result = list(s)

    # move the step by every 2 * the value of k, for example in character chunks of length 4
    for i in range(0, len(result), 2 * k):
        # reverse the first k, or 2 characters of the current 4 character chunk
        # i + k will slice the length of the characters to be reversed (not inclusive of the end): s[0:2] --> a,b
        # normally slicing will result in a new list, but when we do result[i:i+k] = something, py will update the original list in place by replacing the slice with whatever is on the right of the =
        result[i : i + k] = result[i : i + k][::-1]

    return "".join(result)


print(reverse_string("abcdefg", 2))  # output: "bacdfeg"
print(reverse_string("abcdefg", 3))  # output: "cbadefg"
print(reverse_string("abcd", 2))  # output: "bacd"
print(reverse_string("ab", 3))  # output: "ba"
