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


Walkthrough:
Input: [3, 5, -1, 8] (largest number 12)
Remaining array: [3, 5, -1, 8] (length n = 4)
Total subsets: 2^4 = 16
Outer loop for each value of i: For each value of i (from 0 to 15), the binary representation of i determines which elements are included in the subset.
Inner loop for each value of i:
    Outer Loop (i = 6, Binary: 0110)
    Subset: Include elements at indices 1 and 2 → Subset [5, -1].
    Inner Loop Execution:
    j = 0: i & (1 << 0) → 0110 & 0001 = 0 → Exclude 3.
    j = 1: i & (1 << 1) → 0110 & 0010 = 0010 → Include 5.
    subset_sum += 5 → subset_sum = 5.
    j = 2: i & (1 << 2) → 0110 & 0100 = 0100 → Include -1.
    subset_sum += -1 → subset_sum = 4.
    j = 3: i & (1 << 3) → 0110 & 1000 = 0 → Exclude 8.
    Final Subset Sum: 4.
    Outer Loop (i = 14, Binary: 1110)
    Subset: Include elements at indices 1, 2, and 3 → Subset [5, -1, 8].
    Inner Loop Execution:
    j = 0: i & (1 << 0) → 1110 & 0001 = 0 → Exclude 3.
    j = 1: i & (1 << 1) → 1110 & 0010 = 0010 → Include 5.
    subset_sum += 5 → subset_sum = 5.
    j = 2: i & (1 << 2) → 1110 & 0100 = 0100 → Include -1.
    subset_sum += -1 → subset_sum = 4.
    j = 3: i & (1 << 3) → 1110 & 1000 = 1000 → Include 8.
    subset_sum += 8 → subset_sum = 12.
    Final Subset Sum: 12 (matches largest number).

Time complexity: O(2^n * n) where n is the length of the array due to generating all subsets and summing elements
Space complexity: O(n) for the array and subset sums
"""

# def array_addition(list_of_nums):
#     largest_num = max(list_of_nums)
#     list_of_nums.remove(largest_num)

#     # get the total number of subsets (2^n where n is the length of the array)
#     # the total number of subsets in a list is calculated using 2^n where n is the length of the array
#     # a subset refers to all the possible combinations of elements from a set (not taking in order) and includes an empty set and the full set itself
#     n = len(list_of_nums)
#     # shifting the binary digit 1 left n places
#     # binary 2 is ...0010, binary 4 is ...0100, binary 8 is ...1000
#     total_subsets = 1 << n  # equivalent to 2^n

#     # generate all subsets using binary representation
#     for i in range(total_subsets):
#         subset_sum = 0

#         for j in range(n):
#             # check if the j-th element is included in the i-th subset
#             if i & (1 << j):  # if the j-th bit of i is 1
#                 subset_sum += list_of_nums[j]

#         # check if the sum of this subset equals the largest number
#         if subset_sum == largest_num:
#             return True

#     return False


import itertools


def array_addition(list_of_nums):
    largest_num = max(list_of_nums)
    list_of_nums.remove(largest_num)

    # r represents the size of the combination (not the index), or the number of elements to pick for the current combination
    # iterating from 1 to len(list_of_nums) + 1 means the the combinations will range from size 1 to size 5, because for range(1, 5) 1 is inclusive, 5 is exclusive, so add 1 after
    for r in range(1, len(list_of_nums) + 1, 1):
        # order does not matter, and there are no repetitions of elements
        # r is the size of each combination
        # combinations are in tuples
        for tup_combo in itertools.combinations(list_of_nums, r):
            if sum(tup_combo) == largest_num:
                return True

    return False


print(array_addition([5, 7, 16, 1, 2]))  # output: false
print(array_addition([3, 5, -1, 8, 12]))  # output: true
print(array_addition([5, 10, 15, 20]))  # output: true
print(array_addition([1, 2, 3, 6]))  # output: true
print(array_addition([1, 2, 3, 7]))  # output: false
print(array_addition([10, 5, 3, 2, 8]))  # output: true
print(array_addition([100, 250, 500, 1000, 1500, 2000, 7000]))  # output: false
