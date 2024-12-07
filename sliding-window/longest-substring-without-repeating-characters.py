"""
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
https://neetcode.io/problems/longest-substring-without-duplicates

Longest Substring Without Repeating Characters
Medium

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces


Approach: sliding window
I: string
O: integer representing the length of the longest substring without repeating characters

1. initialize an empty char set to keep track of duplicate characters
2. set left pointer to 0
3. create a result variable to store the longest substring count
4. iterate using a right pointer starting from 0 to the length of the string:
    4.1. if the charcter is in the char set, remove the character using the left pointer (the value at the left and right pointers will be the same) and increase the left pointer by 1
    4.2. always add the character at the right pointer to the char set (because anytime a duplicate is found it will be removed from the char set by the left pointer)
    4.3. update the result with the current longest length which will be the right pointer - the left pointer + 1
5. return the count

Time complexity = O(n) where n is the length of the string
Space complexity = O(m) where m is the total number of unique characters in the string
"""


# sliding window
def length_of_longest_substring(s) -> int:
    char_set = set()
    left_pointer = 0
    result = 0

    for right_pointer in range(0, len(s), 1):
        # if char at right is in char set, then remove char at left from char set
        while s[right_pointer] in char_set:
            char_set.remove(s[left_pointer])
            left_pointer += 1

        # if char at right is not in char set, then add it
        char_set.add(s[right_pointer])

        # right pointer minus the left pointer + 1 to find the length in between
        result = max(result, right_pointer - left_pointer + 1)

    return result


# sliding window (optimal)
def length_of_longest_substring(s) -> int:
    char_map = {}
    left_pointer = 0
    result = 0

    for right_pointer in range(0, len(s), 1):
        right_char = s[right_pointer]

        if right_char in char_map:
            # if a duplicate is found, update the left pointer to the right of the last occurence of the right character
            # when a duplicate is found, the index value stored in the hashmap at the right character is the one before
            # when the second "a" is found, the value of the right char in the hashmap is 0
            left_pointer = max(left_pointer, char_map[right_char] + 1)

        # store the index of the current character (right_char) in the hashmap so that the value of the right character corresponds to its most recent position (right_pointer)
        char_map[right_char] = right_pointer
        result = max(result, right_pointer - left_pointer + 1)

    return result


print(length_of_longest_substring("abcabcbb"))  # output: 3
print(length_of_longest_substring("abcabcbbabcde"))  # output: 5
print(length_of_longest_substring("bbbbb"))  # output: 1
print(length_of_longest_substring("pwwkew"))  # output: 3
