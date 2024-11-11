"""
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
"""


def longest_consecutive(nums: list[int]) -> int:
    # if len(nums) == 0:
    # return 0

    num_set = set(nums)  # variable must be iterable if initializing a set this way
    print(num_set)
    # num_set = {nums}  # if initialized this way, it will be {[100, 4, 200, 1, 3, 2]}
    longest = 0

    for num in num_set:
        # find the starting point, if num - 1 is not in the set, that means num could be the start of a new sequence
        if (num - 1) not in num_set:
            # if num is the start of a new sequence, then length starts out at 1
            length = 1

            while (num + length) in num_set:
                length += 1
            longest = max(length, longest)

    return longest


print(longest_consecutive([100, 4, 200, 1, 3, 2]))  # output: 4
print(longest_consecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))  # output: 9
print(longest_consecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))  # output: 7
print(longest_consecutive([]))  # output: 0
print(longest_consecutive([-3, -2, 0, -4, -5, 1]))  # output: 4

# edge_case = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
# edge_case.sort()
# print(edge_case)
