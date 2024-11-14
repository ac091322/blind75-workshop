/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

Two Sum II
Medium

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

Example 4:
Input: [1,2,3,4,5,6,7,8,9], target = 17
Output: [8,9]

Example 5:
Input: [1,2,3,4,5,6,7,8,9], target = 3
Output: 1,2]

Constraints:
2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.


Approach: two pointer
Input: [1,2,3,4,5,6,7,8,9], target = 17
        L               R --> 10
          L             R --> 11
            L           R --> 12
If left is less than target, increase left

Input: [1,2,3,4,5,6,7,8,9], target = 3
        L               R --> 10
        L              R  --> 9
        L            R    --> 8
If right is greater than target, decrease right

1. create a left/right pointer and start them at opposite ends of input
2. as we iterate, sum the values of the left/right pointers together and see if they equal the target
  2.1. if it does, return the left/right pointers (+1 for both)
  2.2. if the sum is greater than the target, decrement the right pointer
  2.3. if the sum is less than the target, increment the left pointer

Time complexity: O(n/2) --> O(n)
Space complexity: O(1)
*/


function twoSum(nums, target) {
  let [leftIdx, rightIndx] = [0, nums.length - 1];

  while (leftIdx < rightIndx) {
    let sum = nums[leftIdx] + nums[rightIndx];
    if (sum === target) return [leftIdx + 1, rightIndx + 1];
    if (sum < target) leftIdx += 1
    if (sum > target) rightIndx -= 1
  }

  return [-1, -1];
}


console.log(twoSum([2, 7, 11, 15], 9));  // output: [1, 2]
console.log(twoSum([2, 3, 4], 6));  // output: [1, 3]
console.log(twoSum([-1, 0], -1));  // output: [1, 2]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));  // output: [8, 9]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));  // output: [1, 2]
