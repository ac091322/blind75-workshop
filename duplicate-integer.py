"""
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
"""


def hasDuplicate(list_of_nums):
    counter = {}

    for num in list_of_nums:
        if num in counter:
            return True
        else:
            counter[num] = True

    return False


print(hasDuplicate([1, 2, 3, 3]))
