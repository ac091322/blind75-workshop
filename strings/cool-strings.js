/*
Let’s define a cool string: the ASCII code differences between any character in the current string are always less than equal to the given number k.

For example, "bcad" will be considered a cool string if k=3 since the maximum difference between a and d is 3.

Now, your task is to split the given string into a minimal number of cool substrings. You should return a list of cool strings split from the original string in the same order they are in the original string.

Example:
Input: s = "zzzaazza", k = 20
Output: ["zzz","aa","zz","a"]

Explanation: Since the ASCII difference between z and a is 25, we cannot form them into a cool string. Although we can also split it into [“zzz, ”a”, “a”, ”zz”, ”a”], we only want the minimal number of substrings.

Constraints:
The given string contains lowercase English letters only.
s.length > 0 and k >= 0

Please use the method signature provided below:
function formMinCoolStrings(s, k){
  //your code here ...
}
*/

// compares the char code of the car at index i with one char before it at index i - 1
// function formMinCoolStrings(s, k) {
//     let result = [];
//     let currentSubstring = s[0];

//     for (let i = 1; i < s.length; i += 1) {
//         // find the char code of each character at index i
//         if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1)) <= k) {
//             currentSubstring += s[i];
//         } else {
//             result.push(currentSubstring);
//             currentSubstring = s[i];
//         }
//     }

//     // push the last string after the for loop ends (or push the only string if there are no breaks)
//     result.push(currentSubstring);
//     return result;
// }

// compares the char code of the char at index i with the lowest char code value in the current substring
function formMinCoolStrings(s, k) {
    const res = [];
    let curStr = s[0];
    let min = s.charCodeAt(0);
    let max = s.charCodeAt(0);

    for (let i = 1; i < s.length; i += 1) {
        const num = s.charCodeAt(i);
        const newMin = Math.min(min, num);
        const newMax = Math.max(max, num);

        if (Math.abs(newMax - newMin) <= k) {
            curStr += s[i];
            min = newMin;
            max = newMax;
        } else {
            res.push(curStr);
            curStr = s[i];
            min = num;
            max = num;
        }
    }

    res.push(curStr);
    return res;
}

console.log("abdfyaez".charCodeAt(4))

// console.log(formMinCoolStrings("zzzaazza", 20));  // output: ["zzz","aa","zz","a"]
// console.log(formMinCoolStrings("bcad", 3));  // output: ["bcad"]
// console.log(formMinCoolStrings("abcdeghijk", 3));  // output: ["abcdeghijk"]
console.log(formMinCoolStrings("abdfyaez", 5));  // output: ["abdf", "y", "ae", "z"]
