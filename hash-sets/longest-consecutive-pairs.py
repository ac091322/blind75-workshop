"""
https://leetcode.com/problems/longest-consecutive-sequence/description/

Longest Consecutive Sequence
Medium

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109


Approach: hash set
I: list of numbers
O: integer (not count, but length of longest consecutive pairs)

1. create a hash set to remove duplicates from the list of numbers
2. set a longest variable at 0, which will keep track of the current longest length found
3. iterate through the numbers list:
   3.1. check if number - 1 is not in the hash set
      3.1.1. if number - 1 is not in the hash set, then this number is a potential start of the longest sequence
      3.1.2. set length to 1
      3.1.3. use a while loop to keep finding consecutive numbers by adding num + length (or +1 to the current number):
         3.1.3.1. if current number + current length (the next consecutive number) is in the hash set, then the sequence continues, so increase the length by 1
         3.1.3.2. if current number + current length is not in the hash set, then the sequence has ended, and the while loop will terminate, the iteration will then go to the next number in the set
   3.2. if the length is longer than the current longest, set longest to the current length
4. return the longest variable


Time complexity: O(n)
Space complexity: O(n)
"""


def longest_consecutive(nums: list[int]) -> int:
    # if len(nums) == 0:
    # return 0

    num_set = set(nums)  # variable must be iterable if initializing a set this way
    # num_set = {nums}  # if initialized this way, it will be {[100, 4, 200, 1, 3, 2]}
    longest = 0  # covers empty lists

    for num in num_set:
        # find the starting point, if num - 1 is not in the set, that means num could be the start of a new sequence
        if (num - 1) not in num_set:
            # if num is the start of a new sequence, then length starts out at 1 or resets to 1
            length = 1

            # if num + length, or num + 1 is found, the sequence continues and the length increases
            # the current number does not change, it's the while loop that keeps expanding due to length += 1 and ends only when num + length is no longer found in the set
            while (num + length) in num_set:
                length += 1

            longest = max(length, longest)

    return longest


print(longest_consecutive([100, 4, 200, 1, 3, 2]))  # output: 4
print(longest_consecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))  # output: 9
print(longest_consecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))  # output: 7
print(longest_consecutive([]))  # output: 0
print(longest_consecutive([7]))  # output: 1
print(longest_consecutive([-3, -2, 0, -4, -5, 1]))  # output: 4
print(longest_consecutive([6, 7, 8, 100, 9, 10, 11, 12, 1, 2, 3, 4]))  # output: 7

# edge_case = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
# edge_case.sort()
# print(edge_case)
