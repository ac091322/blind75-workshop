// sliding window
// time complexity: O(m * n) where n is the length of the string and m is the total number of unique characters in the string
// space complexity: O(m) where m is the total num ber of unique characters in the string
function characterReplacement(s, k) {

}

// sliding window(optimal)
// time complexity: O(n) where n is the length of the string
// space complexity: O(m) where m is the total num ber of unique characters in the string
function characterReplacement(s, k) {

}


console.log(characterReplacement("ABAB", 2));  // output: 4
console.log(characterReplacement("AABABBA", 1));  // output: 4
console.log(characterReplacement("CAABCBABBA", 2));  // output: 6
console.log(characterReplacement("CACABCCBABCCCBA", 2)); // output: 5
console.log(characterReplacement("AABABBCCCBBZBBZZZBBZBA", 3));  // output: 7
