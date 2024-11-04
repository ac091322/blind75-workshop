"""
https://leetcode.com/problems/3sum/description/

3Sum
Medium

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:
3 <= nums.length <= 3000
-105 <= nums[i] <= 105

Time complexity: O(n log n) + O(n^2) --> O(n^2)
Space complexity: O(1) or O(n)
"""


def three_sum(nums):
    result = []
    nums.sort()

    for i, num in enumerate(nums):
        # check for positive numbers in a sorted list, if the first number is positive, no triplets can sum to 0
        if num > 0:
            break

        # check if the current number is the same as the previous number
        if i > 0 and num == nums[i - 1]:
            continue

        left, right = i + 1, len(nums) - 1

        while left < right:
            three_sum = num + nums[left] + nums[right]
            if three_sum > 0:
                right -= 1
            elif three_sum < 0:
                left += 1
            else:
                result.append([num, nums[left], nums[right]])
                left += 1
                right -= 1
                while nums[left] == nums[left - 1] and left < right:
                    left += 1

    return result


print(three_sum([-1, 0, 1, 2, -1, -4]))  # output: [[-1,-1,2],[-1,0,1]]
# print(three_sum([0, 1, 1]))  # output: []
# print(three_sum([0, 0, 0]))  # output: [[0,0,0]]
# print(three_sum([4, 5, 6]))  # output: []
