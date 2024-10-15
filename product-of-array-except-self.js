/*
https://leetcode.com/problems/product-of-array-except-self/
https://neetcode.io/problems/products-of-array-discluding-self

Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)


Approach:
Input: [1,2,4,6]
Output: [48,24,12,8]

prefix = [1, 1, 1, 1]
find the product of everything that comes before this index:
  prefix = [1, 1, 2, 8]

suffix = [1, 1, 1, 1]
find the product of everything that comes after this index:
  suffix = [48,24,6,1]

combine the 2 into the solution: [48 * 1, 24 * 1, 6 * 2, 1 * 8] = [48, 24, 12, 8]

Make 2 passes to create a prefix and suffix array and then use those two to calculate the product of the array except the num at that index


Time complexity: O(n)
Space complexity: O(n)
*/


function productOfArrayExceptSelf(nums) {
  const prefix = new Array(nums.length).fill(1);
  const suffix = new Array(nums.length).fill(1);
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    let prev = prefix[i - 1]
    let currNum = nums[i - 1];
    if (currNum == undefined) currNum = 1;
    if (prev == undefined) prev = 1;

    prefix[i] = currNum * prev;
  }

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    let next = suffix[i + 1];
    let currNum = nums[i + 1];
    if (currNum == undefined) currNum = 1;
    if (next == undefined) next = 1;

    suffix[i] = currNum * next;
  }

  for (let i = 0; i < nums.length; i += 1) {
    let prev = prefix[i];
    let next = suffix[i];
    result[i] = prev * next;
  }

  return result;
}


console.log(productOfArrayExceptSelf([1, 2, 4, 6]));  // output: [48,24,12,8]
console.log(productOfArrayExceptSelf([-1, 1, 0, -3, 3]));  // output: [0,0,9,0,0]
console.log(productOfArrayExceptSelf([1, 2, 3, 4]));  // output: [24,12,8,6]


// challenege: solve in O(1)
// keep track of everything in one single array and return that array, instead of one for suffix and one for prefix
