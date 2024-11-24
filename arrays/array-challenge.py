"""
Array Challenge
Easy

Have the function ArrayChallenge (arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. 5, 3, 3, 3, 1) should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.

Examples:
Input: [1, 2, 31]
Output: 0

Input: [4, 4, 4, 6, 2]
Outout: 1
"""


def array_challenge(arr):
    sum_of_arr = sum(arr)
    mean = int(sum_of_arr / len(arr))
    mode_frequency = {}
    max_mode_frequency = 0
    mode = None

    for num in arr:
        mode_frequency[num] = mode_frequency.get(num, 0) + 1

    for num in mode_frequency:
        if mode_frequency[num] > max_mode_frequency:
            max_mode_frequency = mode_frequency[num]
            mode = num

    return 1 if mode == mean else 0


print(array_challenge([1, 2, 3]))  # output: 0
print(array_challenge([4, 4, 4, 6, 2]))  # output: 1
