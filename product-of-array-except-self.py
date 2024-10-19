"""
https://leetcode.com/problems/product-of-array-except-self/
https://neetcode.io/problems/products-of-array-discluding-self

Product of Array Except Self
Medium

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

1. prefix = [1, 1, 1, 1]
find the product of everything that comes before this index:
  - prefix = [1, 1, 2, 8]

2. suffix = [1, 1, 1, 1]
find the product of everything that comes after this index:
  - suffix = [48, 24, 6, 1]

3. combine the 2 into the solution: [48 * 1, 24 * 1, 6 * 2, 1 * 8] = [48, 24, 12, 8]

4. make 2 passes to create a prefix and suffix array and then use those two to calculate the product of the array except the num at that index

Time complexity: O(n)
Space complexity: O(n)

Challenge: solve in O(1) time
"""


def product_of_array(nums):
    prefix = [1] * len(nums)
    suffix = [1] * len(nums)
    result = [1] * len(nums)

    # compute prefix products
    for i in range(1, len(nums), 1):  # start at 1 because prefix[0] is always 1
        prefix[i] = prefix[i - 1] * nums[i - 1]
        # prefix becomes [1, 1, 2, 8]

    # compute suffix products
    for i in range(len(nums) - 2, -1, -1):  # start at len(nums)-2 because suffix[len(nums)-1] is always 1
        suffix[i] = suffix[i + 1] * nums[i + 1]
        # suffix becomes [48, 24, 6, 1]

    # compute result by multiplying prefix and suffix products
    for i in range(0, len(nums), 1):
        result[i] = prefix[i] * suffix[i]

    return result


print(product_of_array([1, 2, 4, 6]))  # output: [48,24,12,8]
print(product_of_array([-1, 1, 0, -3, 3]))  # output: [0,0,9,0,0]
print(product_of_array([1, 2, 3, 4]))  # output: [24,12,8,6]
