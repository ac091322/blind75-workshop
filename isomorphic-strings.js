/*
https://leetcode.com/problems/isomorphic-strings/description/

Isomorphic Strings
Easy

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation: The strings s and t can be made identical by:
  - Mapping 'e' to 'a'.
  - Mapping 'g' to 'd'.

Example 2:
Input: s = "foo", t = "bar"
Output: false
Explanation: The strings s and t cannot be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.


Approach:
1. check if the length of the strings is the same, return false if not
2. create a hashmap to map s_to_t and t_to_s
3. iterate through characters in s and t in pairs and check if they exist in the hashmaps
  3.1. if char s is not in s_to_t then create the key value pair setting key of s in s_to_t to the value of t
  3.2. if char s is in s_to_t, then check if key s in s_to_t is equal to t
    3.2.1. if s and t are not equal, return false
4. do the same for t
5. return true at the end


Time complexity: O(n)
Space complexity: 0(n)
*/


// function isIsomorphic(s, t) {
//   if (s.length !== t.length) return false

//   const mapStoT = {}
//   const mapTtoS = {}

//   for (let i = 0; i < s.length; i += 1) {
//     let charS = s[i]
//     let charT = t[i]

//     if (charS in mapStoT) {
//       if (mapStoT[charS] !== charT) {
//         return false
//       }
//     } else {
//       mapStoT[charS] = charT  // first iteration: {e: a}
//     }

//     if (charT in mapTtoS) {
//       if (mapTtoS[charT] !== charS) {
//         return false
//       }
//     } else {
//       mapTtoS[charT] = charS  // first iteration: {a: e}
//     }
//   }

//   return true
// }

function isIsomorphic(s, t) {
  const x = new Map()

  for (let i = 0; i < s.length; i++) {
    if (x.get(s[i]) == t[i]) continue;
    if (x.has(s[i]) && x.get(s[i]) != t[i] || t.indexOf(t[i]) < i) return false
    x.set(s[i], t[i])
  }

  return true;
};


console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
