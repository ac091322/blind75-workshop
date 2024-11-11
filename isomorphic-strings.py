"""
https://leetcode.com/problems/isomorphic-strings/description/

Isomorphic Strings
Easy

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation: The strings s and t can be made identical by:
  - Mapping 'e' to 'a'.
  - Mapping 'g' to 'd'.

Example 2:
Input: s = "foo", t = "bar"
Output: false
Explanation: The strings s and t cannot be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.


Approach: hashmap
1. check if the length of the strings is the same, return false if not
2. create a hashmap to map s_to_t and t_to_s
3. iterate through characters in s and t in pairs and check if they exist in the hashmaps
  3.1. if char s is not in s_to_t then create the key value pair setting key of s in s_to_t to the value of t
  3.2. if char s is in s_to_t, then check if key s in s_to_t is equal to t
    3.2.1. if s and t are not equal, return false
4. do the same for t
5. return true at the end


Time complexity: O(n)
Space complexity: 0(n)
"""


def is_isomorphic(s, t):
    if len(s) != len(t):
        return False

    map_s_to_t = {}
    map_t_to_s = {}

    for char_s, char_t in zip(s, t):

        # check if there's already a mapping for s -> t
        if char_s in map_s_to_t:
            if map_s_to_t[char_s] != char_t:
                return False
        else:
            map_s_to_t[char_s] = char_t

        # check if there's already a mapping for t -> s
        if char_t in map_t_to_s:
            if map_t_to_s[char_t] != char_s:
                return False
        else:
            map_t_to_s[char_t] = char_s

    return True


# def is_isomorphic(s, t):
#     x = {}

#     for i in range(len(s)):
#         if s[i] in x:
#             if x[s[i]] != t[i]:
#                 return False
#         elif t.index(t[i]) < i:
#             return False
#         else:
#             x[s[i]] = t[i]

#     return True


print(is_isomorphic("egg", "add"))  # output: True
print(is_isomorphic("foo", "bar"))  # output: False
print(is_isomorphic("paper", "title"))  # output: True
