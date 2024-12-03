/*
https://neetcode.io/problems/string-encode-and-decode

Encode and Decode Strings
Medium

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode.

Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Example 2:
Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]

Constraints:
0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters


Approach: hashmap
1. encode the string:
  1.1. encode the strings in the input list
  1.2. use length + a delimiter to encode the string --> "4#neet"
  1.3. the length here will be used to decode the string by finding the length after the delimiter
  1.4. return the new encoded string from the encode function
2. decode the string:
  2.1. set a result list to hold the decoded strings
  2.2. use a while loop to iterate over the length of the input string:
    2.2.1. create an index j and set j to equal i
    2.2.2. start a nested while loop to find the delimiter
    2.2.3. if the delimiter is found, increase j by 1
    2.2.4. find and set the length by slicing from i to j, which should be a string number, then convert it to an integer
    2.2.5. move i past the # to the start of the next string, j + 1
    2.2.6. set j to get the position after the last character, i + length
    2.2.7. slice the string from i to j and append to result
    2.2.8. update i to the new position of j
  2.3. return the result, which is the original list of strings

Walkthrough:
# iteration 1:
found length: 4 from s[0:1] = 4
extracted string: neet from s[2:6]
updated i: 6, current result: ['neet']

# iteration 2:
found length: 4 from s[6:7] = 4
extracted string: code from s[8:12]
updated i: 12, current result: ['neet', 'code']

# iteration 3:
found length: 4 from s[12:13] = 4
extracted string: love from s[14:18]
updated i: 18, current result: ['neet', 'code', 'love']

# iteration 4:
found length: 3 from s[18:19] = 3
extracted string: you from s[20:23]
updated i: 23, current result: ['neet', 'code', 'love', 'you']

Time complexity: O(n) where n is the number of strings
Space complexity: O(n)
*/


function encode(strs) {
  let encodedS = "";

  for (let substring of strs) {
    encodedS += String(substring.length) + "#" + substring;  // due to type coercion don't need to to String()
  }

  return encodedS;
}

function decode(s) {
  let decodedS = [];

  let i = 0;
  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") j += 1;

    let length = parseInt(s.slice(i, j));  // Number(s.slice(i , j)) works too
    i = j + 1;
    j = i + length;
    decodedS.push(s.slice(i, j));
    i = j
  }

  return decodedS;
}


let encoded = encode(["neet", "code", "love", "you"]);
console.log(encoded);  // encoded: "4#neet4#code4#love3#you"
let decoded = decode(encoded)
console.log(decoded);  // decoded: ["neet", "code", "love", "you"]
