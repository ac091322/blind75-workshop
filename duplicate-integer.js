/*
https://neetcode.io/problems/duplicate-integer
https://leetcode.com/problems/contains-duplicate/description/

Duplicate Integer
Easy

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false

Example 4:
Input: [1];
Output: false


Approach:
Input: nums = [1, 2, 3, 3]
Hashmap: {1: true, 2: true, 3: true,}
Output: return True

1. use hashmap or set to keep track of seen numbers as we iterate
  1.1. if we encounter something we've seen, return true
  1.2. otherwise return false


Time complexity: O(n)
Space complexity: O(n)
*/


function hasDuplicate(arrayOfNums) {
  const counter = {};  // {1:true, 2:true, 3:true}

  for (let i = 0; i < arrayOfNums.length; i++) {
    let num = arrayOfNums[i]  // 3
    if (counter[num]) {
      return true;
    } else {
      counter[num] = true;
    }
  }

  return false;
}


console.log(hasDuplicate([1, 2, 3, 3]));
