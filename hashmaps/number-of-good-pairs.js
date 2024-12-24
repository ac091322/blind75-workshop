/*
https://leetcode.com/problems/number-of-good-pairs/

Number of Good Pairs
Easy

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array is good.

Example 3:
Input: nums = [1,2,3]
Output: 0

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100


Approach: hashmap
1. create a hashmap counter to keep track of how many times each number has been seen so far in the list
2. set a variable to count the good pairs starting from 0
3. iterate through the numbers in the list
  3.1. if number is not in counter (has not been seen before), then create it in the counter and set its value to 1
  3.2. if number is in counter (has been seen before), then a duplicate is found, then increase the number of good pairs by the number of previous occurrences of that number
    3.2.1. then increase the value of the number key in the counter by 1
4. return the number of good pairs


Time complexity: O(n) amortized
Space complexity: O(n)
*/


function findGoodPairs(array) {
  const pairCounter = {};
  let goodPairs = 0;

  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];

    if (num in pairCounter) {
      goodPairs += pairCounter[num];
      pairCounter[num] += 1;
    } else {
      pairCounter[num] = 1;
    }
  }

  return goodPairs;
};


console.log(findGoodPairs([1, 2, 3, 1, 1, 3]));  // output: 4
console.log(findGoodPairs([1, 2, 3]));  // output: 0
console.log(findGoodPairs([1, 1, 1, 1]));  // output: 6
