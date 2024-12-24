/*
https://neetcode.io/problems/two-integer-sum
https://leetcode.com/problems/two-sum/description/

Two Sum
Easy

Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:
Input: nums = [3,4,5,6], target = 7
Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:
Input: nums = [4,5,6], target = 10
Output: [0,2]

Example 3:
Input: nums = [5,5], target = 10
Output: [0,1]

Constraints:
2 <= nums.length <= 1000
-10,000,000 <= nums[i] <= 10,000,000
-10,000,000 <= target <= 10,000,000


Approach:
1. use a hashmap to store indexes of seen numbers
2. iterate over nums adding numbers and their indexes to the hashmap as you go
3. take the complement of the current number (target - current number) and check if it exists in the hashmap
  3.1. if it does, return the indices of the current number and its complement
  3.2. if it does not exist, return none

Input: nums = [3,4,5,6], target = 7
nums[0] + nums[1] = target
3 + 4 = 7
return [0, 1]


Time complexity: O(n)
Space complexity: O(n)
*/


function two_sum(nums, target) {
  const indexes = {}

  for (let i = 0; i < nums.length; i += 1) {
    let num = nums[i];
    let complement = target - num;

    // must use "complement in indexes" to check if complement in index
    // cannot use indexes[complement] because if value is 0, it returns a falsey
    if (complement in indexes) {
      return [indexes[complement], i]
    } else {
      indexes[num] = i
    }
  }

  return null;
}


console.log(two_sum([3, 4, 5, 6], 7));  // output: [0, 1]
console.log(two_sum([4, 5, 6], 10));  // output: [0, 2]
console.log(two_sum([5, 5], 10))  // output: [0, 1]
