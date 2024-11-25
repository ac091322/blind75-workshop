"""
https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

Min-Max Sum
Basic

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
"""

# def miniMaxSum(arr):
#     arr.sort()
#     maximum = 0
#     minimum = 0

#     for i in range(0, len(arr) - 1, 1):
#         minimum += arr[i]

#     for i in range(1, len(arr), 1):
#         maximum += arr[i]

#     print(minimum, maximum)


def miniMaxSum(arr):
    arr.sort()
    min_sum = sum(arr[0:-1:1])  # same as [:len(arr) - 1] or [:len(arr)-1:]
    max_sum = sum(arr[1 : len(arr) : 1])  # same as [1:] or [1::]
    print(min_sum, max_sum)


# def miniMaxSum(arr):
#     total_sum = sum(arr)
#     min_sum = total_sum - max(arr)
#     max_sum = total_sum - min(arr)
#     print(min_sum, max_sum)


miniMaxSum([1, 3, 5, 7, 9])  # output: 16 24
miniMaxSum([1, 2, 3, 4, 5])  # output 10 14
