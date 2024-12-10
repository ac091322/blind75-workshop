// sliding window(optimal)
// time complexity: O(n) where n is the length of the string
// space complexity: O(m) where m is the total num ber of unique characters in the string
function characterReplacement(s, k) {
    let charCounter = new Map()
    let [result, left, maxCharFreq] = [0, 0, 0]

    for (let right = 0; right < s.length; right += 1) {
        charCounter.set(s[right], (charCounter.get(s[right]) || 0) + 1)
        maxCharFreq = Math.max(maxCharFreq, charCounter.get(s[right]))

        while ((right - left + 1) - maxCharFreq > k) {
            charCounter.set(s[left], charCounter.get(s[left]) - 1)
            left += 1
        }

        result = Math.max(result, right - left + 1)
    }

    return result
}


console.log(characterReplacement("ABAB", 2));  // output: 4
console.log(characterReplacement("AABABBA", 1));  // output: 4
console.log(characterReplacement("CAABCBABBA", 2));  // output: 6
console.log(characterReplacement("CACABCCBABCCCBA", 2)); // output: 5
console.log(characterReplacement("AABABBCCCBBZBBZZZBBZBA", 3));  // output: 7
