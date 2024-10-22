"""
https://leetcode.com/problems/boats-to-save-people/description/

Boats to Save People
Medium

You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

Example 1:
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Example 2:
Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Example 3:
Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)


Constraints:
1 <= people.length <= 5 * 104
1 <= people[i] <= limit <= 3 * 104

Time complexity: O(n log n)
Space complexity: O(1)
"""


def boats_to_save_people(people, limit):
    people.sort()  # sort people by weight, heaviest on the right
    left_index = 0
    right_index = len(people) - 1
    boats = 0

    while left_index <= right_index:
        if people[left_index] + people[right_index] <= limit:
            left_index += 1

        # always move the right index (heaviest person always gets a boat)
        right_index -= 1
        boats += 1

    return boats


print(boats_to_save_people([1, 2], 3))  # output: 1
print(boats_to_save_people([3, 2, 2, 1], 3))  # output: 3
print(boats_to_save_people([3, 5, 3, 4], 5))  # output: 4
print(boats_to_save_people([2, 2], 6))  # output: 1
