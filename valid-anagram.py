"""
https://neetcode.io/problems/is-anagram
https://leetcode.com/problems/valid-anagram/description/

Is Anagram
Easy

Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"
Output: true

Example 2:
Input: s = "jar", t = "jam"
Output: false

Example 3:
Input: s= "test" t = "test"
Output: true

Example 4:
Input: s="" t="t"
Output: false

Example 5:
Input: s="test" t="testtest"
Output: false

Constraints:
s and t consist of lowercase English letters.


Approach: hashmap
Input: s = "racecar", t = "carrace"
s = {r: 2, a: 2, c: 2, e: 1}
t = {c: 2, a: 2, r: 2, e: 1}
Output: true

1. return false if strings are different lengths
2. create two separate hashmaps to keep count of each character in each input string
3. once we have the counts, take keys from first hashmap and use them to check the values in both
  3.1. if the counts differ at any point, return false
  3.2. otherwise return true


Time complexity: O(n) because of comparing value pairs in both dictionaries
Space complexity: O(s+t) where s is the length of string 1 and t is the length of string 2
  - s and t will always be the same length so: O(n + n) --> O(2n) --> O(n)
"""


def is_anagram(s, t):
    if len(s) != len(t):
        return False

    counterS = {}
    counterT = {}

    i = 0
    while i < len(s):
        charS = s[i]
        charT = t[i]

        # if charS in counterS:
        # counterS[charS] += 1
        # else:
        # counterS[charS] = 1
        counterS[charS] = counterS.get(charS, 0) + 1

        # if charT in counterT:
        # counterT[charT] += 1
        # else:
        # counterT[charT] = 1
        counterT[charT] = counterT.get(charT, 0) + 1

        i += 1

    # if counterS == counterT:
    # return True
    # else:
    # return False
    return counterS == counterT


print(is_anagram("racecar", "carrace"))  # output: True
print(is_anagram("test", "testtest"))  # output: False
print(is_anagram("test", "testtest"))  # output: False
print(is_anagram("jar", "jam"))  # output: False
