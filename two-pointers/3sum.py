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


Approach: two pointer
1. create empty list to hold results
2. sort the nums list
3. iterate through the nums list:
  3.1. if the current number is greater than 0, break out of the loop (no triplets can sum up to 0) and return result
  3.2. if the index is greater than 0 and the current number is the same as the previous number, continue (skip the current number and go onto the next number in the iteration)
  3.3. set the left pointer to the next number i + 1 and the right pointer to the length of the list len(nums) - 1
4. while left < right:
  4.1. define three sum as the current number + number at the left index + the number at the right index
  4.2. if the three sum is greater than 0, decrease the right index by 1
  4.3. if the three sum is less than 0, increase the left index by 1
  4.4. if the three sum is equal to 0, append the num, left num, and right num to the result, increase the left index by 1, decrease the right index by 1
    4.4.1. perform an additional check to see if the next left and right numbers are the same to prevent duplicates after a triplet has been found
    4.4.2. if the next left number is the same as the previous left number, skip the number
    4.4.3. if the next right number is the same as the previous right number, skip the number
return result list


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

        # check if the current number is the same as the previous number, if it is skip current number and go onto the next number
        # starts with index 1 to prevent out-of-bounds error for i - 1
        if i > 0 and num == nums[i - 1]:
            continue

        # don't need to bring the left pointer back to index 0 because this is a sorted list
        left, right = i + 1, len(nums) - 1

        while left < right:
            three_sum = num + nums[left] + nums[right]

            if three_sum > 0:
                right -= 1
            elif three_sum < 0:
                left += 1
            else:
                result.append([num, nums[left], nums[right]])
                left, right = left + 1, right - 1

                # after adding a valid triplet, this skips any duplicate numbers at the left and right pointers to avoid duplicate triplets
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1

    return result


print(three_sum([-1, 0, 1, 2, -1, -4]))  # output: [[-1,-1,2],[-1,0,1]]
# sorted_list = [-4, -1, -1, 0, 1, 2]
print(three_sum([-4, -1, -1, -1, 0, 1, 2]))  # output: [[-1,-1,2],[-1,0,1]]
print(three_sum([-4, -1, -1, -1, 0, 1, 2, 2, 2]))  # output: [[-1,-1,2],[-1,0,1]]
print(three_sum([4, 0, 1, 2, 6, 2]))  # output: []
print(three_sum([0, 1, 1]))  # output: []
print(three_sum([0, 0, 0]))  # output: [[0,0,0]]
print(three_sum([4, 5, 6]))  # output: []
