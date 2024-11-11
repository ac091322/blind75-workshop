/*
https://leetcode.com/problems/longest-consecutive-sequence/description/

Longest Consecutive Sequence
Medium

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109


Approach: hash set
Time complexity: O(n)
Space complexity: O(n)
*/


function longestConsecutive(nums) {
    let numSet = new Set(nums);
    let longest = 0;

    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let length = 1

            while (numSet.has(num + length)) length += 1

            longest = Math.max(longest, length)
        }
    }

    return longest;
}


console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));  // output: 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));  // output: 9
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));  // output: 7
console.log(longestConsecutive([]));  // output: 0
console.log(longestConsecutive([7]));  // output: 1
console.log(longestConsecutive([-3, -2, 0, -4, -5, 1]));  // output: 4
console.log(longestConsecutive([1, 2, 3, 4, 6, 7, 8, 100, 9, 10, 11, 12]));  // output: 7

// let edgeCase = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
// edgeCase.sort((a,b) => (a- b))
// console.log(edgeCase)
