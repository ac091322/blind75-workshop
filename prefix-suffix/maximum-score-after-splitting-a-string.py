"""
https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/

Maximum Score After Splitting a String
Easy

Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

Example 1:
Input: s = "011101"
Output: 5
Explanation:
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5
left = "01" and right = "1101", score = 1 + 3 = 4
left = "011" and right = "101", score = 1 + 2 = 3
left = "0111" and right = "01", score = 1 + 1 = 2
left = "01110" and right = "1", score = 2 + 1 = 3

Example 2:
Input: s = "00111"
Output: 5
Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

Example 3:
Input: s = "1111"
Output: 3

Constraints:
2 <= s.length <= 500
The string s consists of characters '0' and '1' only.


Approach: prefix-suffix
1. set left zeroes to 0, which is an empty left substring
2. set right ones to the number of 1s in the string
3. set max score to 0
4. iterate through the string:
  4.1. if it's a 0, increase left zeroes by 1 and do nothing with right ones
  4.2. if it's not a 0, decrease right ones by 1, and do nothing with left zeroes
  4.3. update max score to be the number of left zeroes + the number of right ones
5. return the max score

Walkthrough: "011101"
left part: 0, left zeros: 1, right part: 11101, right ones: 4, total: 5
left part: 01, left zeros: 1, right part: 1101, right ones: 3, total: 4
left part: 011, left zeros: 1, right part: 101, right ones: 2, total: 3
left part: 0111, left zeros: 1, right part: 01, right ones: 1, total: 2
left part: 01110, left zeros: 2, right part: 1, right ones: 1, total: 3

Time complexity: O(n) where n is the length of the string
Space complexity: O(1) only uses left zeroes, right ones, and max score to store the variables, no new variables are created and space used does not depend on the size of the input string
"""


def max_score(str):
    left_zeros = 0  # start with an empty left substring
    right_ones = str.count("1")  # initial count of "1"s in the entire string
    max_score = 0

    # iterate through the string, considering all splits except the very last character
    for i in range(len(str) - 1):  # split between i and i + 1, so end at len(s) - 1
        if str[i] == "0":
            left_zeros += 1
        else:
            right_ones -= 1

        max_score = max(max_score, left_zeros + right_ones)

    return max_score


print(max_score("00010000"))  # output: 6
print(max_score("011101"))  # output: 5
print(max_score("00111"))  # output: 5
print(max_score("1111"))  # output: 3
print(max_score("00000"))  # output: 4
print(max_score("0101010101"))  # output: 6
