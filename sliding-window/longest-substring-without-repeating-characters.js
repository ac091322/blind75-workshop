/*
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
*/


// sliding window
function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let [result, leftPointer] = [0, 0];

    for (let rightPointer = 0; rightPointer < s.length; rightPointer += 1) {
        while (charSet.has(s[rightPointer])) {
            charSet.delete(s[leftPointer]);
            leftPointer += 1;
        }

        charSet.add(s[rightPointer]);
        result = Math.max(result, rightPointer - leftPointer + 1);
    }

    return result;
}

// sliding window (optimal)
function lengthOfLongestSubstring(s) {
    let charMap = new Map();
    let [result, leftPointer] = [0, 0];

    for (let rightPointer = 0; rightPointer < s.length; rightPointer += 1) {
        let rightChar = s[rightPointer];

        if (charMap.has(rightChar)) leftPointer = Math.max(leftPointer, charMap.get(rightChar) + 1);

        charMap.set(rightChar, rightPointer)
        result = Math.max(result, rightPointer - leftPointer + 1);
    }

    return result;
}


console.log(lengthOfLongestSubstring("abcabcbb"));  // output: 3
console.log(lengthOfLongestSubstring("abcbacbab"));  // output: 3
console.log(lengthOfLongestSubstring("abccacbab"));  // output: 3
console.log(lengthOfLongestSubstring("abcabcbbabcde"));  // output: 5
console.log(lengthOfLongestSubstring("bbbbb"));  // output: 1
console.log(lengthOfLongestSubstring("pwwkew"));  // output: 3
