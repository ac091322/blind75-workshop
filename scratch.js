function lengthOfLongestSubstring(s) {
    let charMap = {}
    let result = 0
    let leftP = 0

    for (let rightP = 0; rightP < s.length; rightP += 1) {
        let rightChar = s[rightP]

        if (rightChar in charMap) {
            leftP = Math.max(leftP, charMap[rightChar] + 1)
        }

        charMap[rightChar] = rightP
        result = Math.max(result, rightP - leftP + 1)
    }

    return result
}


console.log(lengthOfLongestSubstring("abcabcbb"));  // output: 3
console.log(lengthOfLongestSubstring("abcabcbbabcde"));  // output: 5
console.log(lengthOfLongestSubstring("bbbbb"));  // output: 1
console.log(lengthOfLongestSubstring("pwwkew"));  // output: 3
