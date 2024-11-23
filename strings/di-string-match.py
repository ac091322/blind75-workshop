"""
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

 Example 1:
Input: s = "IDID"
Output: [0,4,1,3,2]

Example 2:
Input: s = "III"
Output: [0,1,2,3]

Example 3:
Input: s = "DDI"
Output: [3,2,0,1]


Constraints:
1 <= s.length <= 105
s[i] is either 'I' or 'D'.
"""


def di_string_match(s):
    n = len(s)
    # low represents the smallest unused number
    # high represents the largest number in the range and largest used number
    # by picking from the either smallest (low) and largest (high) remaining numbers first, this rule guarentees the condition to be satisfied
    # the smallest number (low) is always the best choice when we need a smaller number to satisfy an "I"
    # the largest number (high) is always the best choice when we need a larger number to satisfy a "D"
    # this way will always have a smaller or larger number available
    low_num, high_num = 0, n
    permutation = []

    for char in s:
        if char == "I":
            permutation.append(low_num)
            print("low", low_num)
            low_num += 1
        elif char == "D":
            permutation.append(high_num)
            print("high", high_num)
            high_num -= 1

    # after processing all characters in s, there will always be exactly one remaining, unused number
    # both low_num and high_num will point to this last number, so just append the last number
    permutation.append(low_num)  # at this point low == high
    return permutation


print(di_string_match("IDID"))  # output: [0,4,1,3,2]
print(di_string_match("III"))  # output: [0,1,2,3]
print(di_string_match("DDI"))  # output: [3,2,0,1]
print(di_string_match("DDIDDIII"))  # output: [8,7,0,6,5,1,2,3,4]
