"""
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
"""


def is_palinedrome(s):
    left_index, right_index = 0, len(s) - 1

    while left_index < right_index:

        while left_index < right_index and not s[left_index].isalnum():
            left_index += 1

        while left_index < right_index and not s[right_index].isalnum():
            right_index -= 1

        if s[left_index].lower() != s[right_index].lower():
            return False

        left_index += 1
        right_index -= 1

    return True


# def is_palinedrome(s):
#     filtered_s = "".join(char.lower() for char in s if char.isalnum())
#     return filtered_s == filtered_s[::-1]


print(is_palinedrome("A man, a plan, a canal: Panama"))  # output: True
print(is_palinedrome("race a car"))  # output: False
print(is_palinedrome(" "))  # output: True
