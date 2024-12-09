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
    1.1. the difference between the left and right pointers (the indexes) + 1 is the length of the window (which will track the longest substring)
2. set left pointer to 0
3. create a result variable to store the longest substring count
4. iterate using a right pointer starting from 0 to the length of the string:
    4.1. use a while and check if a charracter is in the char set
        4.1.1. remove the character at the current left pointer (starting at index 0)
        4.1.2. move the left pointer up by 1
        4.1.3. stay in the while loop until all duplicates are removed
    4.2. always add the character at the right pointer to the char set (because anytime a duplicate is found it will be removed from the char set by the left pointer when it hits the while loop)
    4.3. update the result with the current longest length which will be the right pointer - the left pointer + 1
5. return the count

Time complexity = O(n) where n is the length of the string
Space complexity = O(m) where m is the total number of unique characters in the string
"""


# sliding window
def length_of_longest_substring(s) -> int:
    char_set = set()
    result = left_pointer = 0

    for right_pointer in range(0, len(s), 1):
        # if char at right is in char set, then start removing characters with the left pointer until it finds and removes the character at the right pointer, which will then exit the while loop
        # remove every char in the char set until the duplicate character is found, it doesn't matter if the first one matches or the middle one matches
        while s[right_pointer] in char_set:
            char_set.remove(s[left_pointer])
            left_pointer += 1

        # if char at right is not in char set, then add it
        # once the duplicate char is removed from the set, it will be added right back once it exists the while loop
        char_set.add(s[right_pointer])

        # right pointer minus the left pointer + 1 to find the length in between
        result = max(result, right_pointer - left_pointer + 1)

    return result


# sliding window (optimal)
def length_of_longest_substring(s) -> int:
    # the char map will store the key-value pairs --> {char: index}
    char_map = {}
    result = left_pointer = 0

    for right_pointer in range(0, len(s), 1):
        right_char = s[right_pointer]

        # if this were a while loop, it would stay in the while loop until something causes it to break out before going down the code
        if right_char in char_map:
            # if a duplicate is found, update the left pointer to the right of the last occurence of the right character + 1
            left_pointer = max(left_pointer, char_map[right_char] + 1)

        # store the index of the current character (right_char) in the hashmap so that the value of the right character corresponds to its most recent position (right_pointer)
        # will always update the value in the char map with the latest index of the right pointer
        char_map[right_char] = right_pointer
        result = max(result, right_pointer - left_pointer + 1)

    return result


print(length_of_longest_substring("abcabcbb"))  # output: 3
print(length_of_longest_substring("abcbacbab"))  # output: 3
print(length_of_longest_substring("abccacbab"))  # output: 3
print(length_of_longest_substring("abcabcbbabcde"))  # output: 5
print(length_of_longest_substring("bbbbb"))  # output: 1
print(length_of_longest_substring("pwwkew"))  # output: 3
