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

Time complexity: O(n)
Space complexity: O(1)
"""


class Solution:
    def is_palindrome(self, s):
        left_index, right_index = 0, len(s) - 1

        while left_index < right_index:

            while left_index < right_index and not s[left_index].isalnum():
                left_index += 1

            while left_index < right_index and not self.is_alpha_numeric(
                s[right_index]
            ):
                right_index -= 1

            if s[left_index].lower() != s[right_index].lower():
                return False

            left_index, right_index = left_index + 1, right_index - 1

        return True

    def is_alpha_numeric(self, char):
        return "a" <= char <= "z" or "A" <= char <= "Z" or "0" <= char <= "9"


"""
Time complexity: O(n)
Space complexity: O(n)
"""


# def is_palindrome(s):
#     filtered_s = "".join(char.lower() for char in s if char.isalnum())
#     print(filtered_s)
#     return filtered_s == filtered_s[::-1]


"""
Time complexity: O(n^2)
Space complexity: O(n)
"""


# def is_palindrome(s):
#     filtered_S = ""

#     for char in s:
#         if (
#             ord("a") <= ord(char) <= ord("z")
#             or ord("A") <= ord(char) <= ord("Z")
#             or ord("0") <= ord(char) <= ord("9")
#         ):
#             filtered_S += char.lower()

#     return filtered_S == filtered_S[::-1]

solution = Solution()
print(solution.is_palindrome("A man, a plan, a canal: Panama"))  # output: True
print(solution.is_palindrome("race a car"))  # output: False
print(solution.is_palindrome(" "))  # output: True
print(solution.is_palindrome("0P"))  # output: False
