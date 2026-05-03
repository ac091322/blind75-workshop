"""
Merge Intervals
Medium

Time complexity: O(n log n)
Space complexity: O(n)

Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

You may return the answer in any order.

Note: Intervals are non-overlapping if they have no common point. For example, [1, 2] and [3, 4] are non-overlapping, but [1, 2] and [2, 3] are overlapping.

Example 1:
Input: intervals = [[1,3],[1,5],[6,7]]
Output: [[1,5],[6,7]]

Example 2:
Input: intervals = [[1,2],[2,3]]
Output: [[1,3]]

Constraints:
1 <= intervals.length <= 1000
intervals[i].length == 2
0 <= start <= end <= 1000
"""

from typing import List


def merge(intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort()
    stack = [intervals[0]]

    for index in range(1, len(intervals), 1):
        current_interval = {"start": intervals[index][0], "end": intervals[index][1]}
        last_interval = {
            "start": stack[-1][0],
            "end": stack[-1][1],
        }

        if (
            current_interval["start"] <= last_interval["end"]
            and current_interval["end"] > last_interval["end"]
        ):  # partial overlap
            stack[-1][1] = current_interval["end"]
        elif current_interval["start"] > last_interval["end"]:  # no overlap
            stack.append(intervals[index])

    return stack


print(merge([[1, 3], [1, 5], [6, 7]]))
