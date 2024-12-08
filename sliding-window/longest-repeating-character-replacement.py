"""
https://leetcode.com/problems/longest-repeating-character-replacement/description/
https://neetcode.io/problems/longest-repeating-substring-with-replacement

Longest Repeating Character Replacement
Medium

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

Constraints:
1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length


Approach: sliding window
I: string and target integer
O: integer representing longest repeating character substring after replacing k characters

1. initialize a set using the string to find the target characters
2. initialize a result variable to keep track of the longest repeating character substring
3. iterate through the target characters in the set through the outer loop
    3.1. set the target character count and the left pointer to 0
    3.2. iterate through the length of the input string (for each target character in the set)
        3.2.1. if the char at the right pointer is equal to the target character, increase the target character count by 1
        3.2.2. check the validity of the window size (the length between the right and left pointers)
        3.2.3. the length of the window will keep expanding as we iterate through the string, so substract the number of target characters from this length to find the number of non-target characters
        3.2.4. if the number of non-target characters exceeds k, then the window is invalid
        3.2.5 if the window is invalid, shrink the window length by moving the left pointer forward by 1
        3.2.6 if the window is invalid, also check to see if the character at the left pointer is equal to the target character, if it is, decrease the target character count by 1
        3.2.7. if the window is valid, directly update the result with the length of the window (right pointer - left pointer + 1)
4. return the count
"""


# sliding window
# time complexity: O(m * n) where n is the length of the string and m is the total number of unique characters in the string
# space complexity: O(m) where m is the total num ber of unique characters in the string
def character_replacement(s: str, k: int) -> int:
    # initialize a set to represent the target characters
    char_set = set(s)  # char_set = {'A', 'B'}
    result = 0

    # iterate through the set for every unique char, then iterate through the input string for the char in the set
    for target_char in char_set:
        target_char_count = left_pointer = 0

        for right_pointer in range(0, len(s), 1):  # s[0] to s[3] -> "ABAB"
            # if the char at right pointer is equal to the char, increase the count by 1
            if s[right_pointer] == target_char:
                target_char_count += 1

            # window size (length) = right - left + 1
            # the length of the window is made of up the number of target characters + the number of non-target characters, so window length - target characters will = non-target characters
            # if this value is greater than k, that means it exceeds the maximum number of allowed replacements and the window is invalid
            while (right_pointer - left_pointer + 1) - target_char_count > k:

                # if char at left pointer is equal to the target character, decrease its count by 1
                if s[left_pointer] == target_char:
                    target_char_count -= 1

                # if the window is invalid, shrink the window by moving the left pointer forward by 1
                # the while loop will continue to run until it exists (when non-target characters are <= k), only after it exists will the result get updated with the new valid window length
                left_pointer += 1

            result = max(result, right_pointer - left_pointer + 1)

    return result


# sliding window (optimal)
# time complexity: O(n) where n is the length of the string
# space complexity: O(m) where m is the total num ber of unique characters in the string
def character_replacement(s: str, k: int) -> int:
    char_count = {}
    result = max_freq_of_char = left_pointer = 0

    for right_pointer in range(0, len(s), 1):
        right_char = s[right_pointer]
        char_count[right_char] = char_count.get(right_char, 0) + 1
        max_freq_of_char = max(max_freq_of_char, char_count[right_char])

        # always subtract the max frequency, not the value that was decremented in the counter
        # subtract the max frequency of any character count from the window size to get the number of non-target characters (the characters that are not the most frequent)
        while (right_pointer - left_pointer + 1) - max_freq_of_char > k:
            left_char = s[left_pointer]
            # still need to decrease the count of the character in case another target character is found, which will increase the count by 1 again
            # it doesn't matter if the character at the left pointer is the target character, it is the character that is existing the window, so it must be decreased
            char_count[left_char] -= 1
            left_pointer += 1

        result = max(result, right_pointer - left_pointer + 1)

    return result


print(character_replacement("ABAB", 2))  # output: 4
print(character_replacement("AABABBA", 1))  # output: 4
print(character_replacement("CAABCBABBA", 2))  # output: 6
print(character_replacement("AABABBCCCBBZBBZZZBBZBA", 3))  # output: 7
