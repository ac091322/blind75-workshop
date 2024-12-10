// sliding window
function lengthOfLongestSubstring(s) {
    let charMap = new Map()
    let [result, left] = [0, 0]

    for (let right = 0; right < s.length; right += 1) {
        if (charMap.has(s[right])) {
            left = Math.max(left, charMap.get(s[right]) + 1)
        }

        charMap.set(s[right], right)
        result = Math.max(result, right - left + 1)
    }

    return result
}


console.log(lengthOfLongestSubstring("abcabcbb"));  // output: 3
console.log(lengthOfLongestSubstring("abcbacbab"));  // output: 3
console.log(lengthOfLongestSubstring("abccacbab"));  // output: 3
console.log(lengthOfLongestSubstring("abcabcbbabcde"));  // output: 5
console.log(lengthOfLongestSubstring("bbbbb"));  // output: 1
console.log(lengthOfLongestSubstring("pwwkew"));  // output: 3
