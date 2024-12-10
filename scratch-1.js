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
