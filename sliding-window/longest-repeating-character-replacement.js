/*
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
*/


// sliding window
// time complexity: O(m * n) where n is the length of the string and m is the total number of unique characters in the string
// space complexity: O(m) where m is the total num ber of unique characters in the string
function characterReplacement(s, k) {
    let charSet = new Set(s);
    let result = 0;

    for (let targetChar of charSet) {
        let targetCharCount = 0;
        let leftPointer = 0;

        for (let rightPointer = 0; rightPointer < s.length; rightPointer += 1) {
            if (s[rightPointer] === targetChar) targetCharCount += 1;

            while ((rightPointer - leftPointer + 1) - targetCharCount > k) {
                if (s[leftPointer] === targetChar) targetCharCount -= 1;
                leftPointer += 1;
            }

            result = Math.max(result, rightPointer - leftPointer + 1);
        }
    }

    return result
}

// sliding window(optimal)
// time complexity: O(n) where n is the length of the string
// space complexity: O(m) where m is the total num ber of unique characters in the string
function characterReplacement(s, k) {
    let charCounter = new Map();
    let [leftPointer, maxCharFreq, result] = [0, 0, 0];

    for (let rightPointer = 0; rightPointer < s.length; rightPointer += 1) {
        let rightChar = s[rightPointer];
        charCounter.set(rightChar, (charCounter.get(rightChar) || 0) + 1);
        maxCharFreq = Math.max(maxCharFreq, charCounter.get(rightChar));

        while ((rightPointer - leftPointer + 1) - maxCharFreq > k) {
            let leftChar = s[leftPointer];
            charCounter.set(leftChar, charCounter.get(leftChar) - 1)
            leftPointer += 1;
        }

        result = Math.max(result, rightPointer - leftPointer + 1);
    }

    return result;
}


console.log(characterReplacement("ABAB", 2));  // output: 4
console.log(characterReplacement("AABABBA", 1));  // output: 4
console.log(characterReplacement("CAABCBABBA", 2));  // output: 6
console.log(characterReplacement("CACABCCBABCCCBA", 2)); // output: 5
console.log(characterReplacement("AABABBCCCBBZBBZZZBBZBA", 3));  // output: 7
