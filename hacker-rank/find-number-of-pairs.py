"""
Find Number of Pairs

Consider two arrays of integers, a[n] and b[n]. What is the maximum number of pairs that can be formed where a[i] > b[j]? Each element can be in no more than one pair.

Find the maximum number of such possible pairs.

Example 1
n = 3
a = [1, 2, 3]
b = [1, 2, 1]

Two ways the maximum number of pairs can be selected:
{a[1], b[0]} = {2, 1} and {a[2], b[2]} = {3, 1} are valid pairs
{a[1], b[0]} = {2, 1} and {a[2], b[1]} = {3, 2} are valid pairs
No more than 2 pairs can be formed, so return 2.

Function Description
Complete the function findNumOfPairs in the editor below.
findNumOfPairs has the following parameters: int a[n]: an array of integers int b[n]: an array of integers

Returns
int: the maximum number of pairs possible

Constraints
1 ≤ n ≤ 10^5
1 ≤ a[i] ≤ 10^9
1 ≤ b[i] ≤ 10^9

Example 2
n = 5
a = [1, 2, 3, 4, 5]
b = [6, 6, 1, 1, 1]
"""


def find_num_of_pairs(a, b):
    a.sort()
    b.sort()

    i = j = 0
    count = 0

    while i < len(a) and j < len(b):
        if a[i] > b[j]:
            count += 1
            i, j = i + 1, j + 1
        else:
            i += 1

    return count


print(find_num_of_pairs([1, 2, 3], [1, 2, 1]))  # output: 2
print(find_num_of_pairs([1, 2, 3, 4, 5], [6, 6, 1, 1, 1]))  # output: 3
