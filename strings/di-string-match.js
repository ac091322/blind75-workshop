/*
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

 Example 1:
Input: s = "IDID"
Output: [0,4,1,3,2]

Example 2:
Input: s = "III"
Output: [0,1,2,3]

Example 3:
Input: s = "DDI"
Output: [3,2,0,1]


Constraints:
1 <= s.length <= 105
s[i] is either 'I' or 'D'.
*/


function diStringMatch(s) {
    let n = s.length;
    let [lowNum, highNum] = [0, n];
    let permutation = [];

    for (let char of s) {
        if (char === "I") {
            permutation.push(lowNum);
            lowNum += 1;
        } else if (char === "D") {
            permutation.push(highNum);
            highNum -= 1
        }
    }

    permutation.push(lowNum);
    return permutation;
}

console.log(diStringMatch("IDID"));  // output: [0,4,1,3,2]
console.log(diStringMatch("III"));  // output: [0,1,2,3]
console.log(diStringMatch("DDI"));  // output: [3,2,0,1]
console.log(diStringMatch("DDIDDIII"));  // output: [8,7,0,6,5,1,2,3,4]
