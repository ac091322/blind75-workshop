"""
Array Addition I
Easy

Have the function ArrayAdditionI (arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains 14, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3
= 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

Examples
Input: [5, 7, 16, 1, 2]
Output: false

Input: [3, 5, -1, 8, 12]
Output: true
"""


def array_addition(list_of_nums):
    largest_num = max(list_of_nums)
    list_of_nums.remove(largest_num)

    # get the total number of subsets (2^n where n is the length of the array)
    n = len(list_of_nums)
    total_subsets = 1 << n  # equivalent to 2^n

    # generate all subsets using binary representation
    for i in range(total_subsets):
        subset_sum = 0

        for j in range(n):
            # check if the j-th element is included in the i-th subset
            if i & (1 << j):  # if the j-th bit of i is 1
                subset_sum += list_of_nums[j]

        # check if the sum of this subset equals the largest number
        if subset_sum == largest_num:
            return True

    return False


print(array_addition([5, 7, 16, 1, 2]))  # output: false
print(array_addition([3, 5, -1, 8, 12]))  # output: true
