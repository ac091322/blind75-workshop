"""
Array Challenge
Easy

Have the function ArrayChallenge (arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. 5, 3, 3, 3, 1) should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.

Examples:
Input: [1, 2, 31]
Output: 0

Input: [4, 4, 4, 6, 2]
Outout: 1


Time complexity: O(n)
Space complexity: O(n)
"""


def array_challenge(arr):
    mean = sum(arr) / len(arr)
    mode = None
    mode_counter = {}
    max_mode_count = 0

    for num in arr:
        mode_counter[num] = mode_counter.get(num, 0) + 1

    for num in mode_counter:
        if mode_counter[num] > max_mode_count:
            max_mode_count = mode_counter[num]
            mode = num

    return 1 if mode == mean else 0


print(array_challenge([1, 2, 3]))  # output: 0
print(array_challenge([4, 4, 4, 6, 2]))  # output: 1
