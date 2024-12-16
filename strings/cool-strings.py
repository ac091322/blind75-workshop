"""
Let’s define a cool string: the ASCII code differences between any character in the current string are always less than equal to the given number k.

For example, "bcad" will be considered a cool string if k=3 since the maximum difference between a and d is 3.

Now, your task is to split the given string into a minimal number of cool substrings. You should return a list of cool strings split from the original string in the same order they are in the original string.

Example:
Input: s = "zzzaazza", k = 20
Output: ["zzz","aa","zz","a"]

Explanation: Since the ASCII difference between z and a is 25, we cannot form them into a cool string. Although we can also split it into [“zzz, ”a”, “a”, ”zz”, ”a”], we only want the minimal number of substrings.

Constraints:
The given string contains lowercase English letters only.
s.length > 0 and k >= 0

Please use the method signature provided below:
function formMinCoolStrings(s, k){
  //your code here ...
}
"""

# compares the char code of the car at index i with one char before it at index i - 1
# def formMinCoolStrings(s, k):
#     result = []
#     curSubstring = s[0]

#     for i in range(1, len(s), 1):
#         if abs(ord(s[i]) - ord(s[i - 1])) <= k:
#             curSubstring += s[i]
#         else:
#             result.append(curSubstring)
#             curSubstring = s[i]

#     result.append(curSubstring)
#     return result


# compares the char code of the char at index i with the lowest char code value in the current substring
def formMinCoolStrings(s, k):
    result = []
    curStr = s[0]
    min_val = ord(s[0])
    max_val = ord(s[0])

    for i in range(1, len(s), 1):
        cur_char_val = ord(s[i])
        new_min_val = min(min_val, cur_char_val)
        new_max_val = max(max_val, cur_char_val)

        if abs(new_max_val - new_min_val) <= k:
            curStr += s[i]
            min_val = new_min_val
            max_val = new_max_val
        else:
            result.append(curStr)
            curStr = s[i]
            min_val = cur_char_val
            max_val = cur_char_val

    result.append(curStr)
    return result


print(formMinCoolStrings("zzzaazza", 20))  # output: ["zzz","aa","zz","a"]
print(formMinCoolStrings("bcad", 3))  # output: ["bcad"]
print(formMinCoolStrings("abcdeghijk", 3))  # output: ["abcdeghijk"]
print(formMinCoolStrings("abdfyaez", 5))  # output: ["abdf", "y", "ae", "z"]
