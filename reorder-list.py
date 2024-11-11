"""
https://leetcode.com/problems/reorder-list/description/

Reorder List
Medium

You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.
-- see diagrams

 Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

Example 3:
Input: [1,2,3,4,5,6,7]
Output: [1,7,2,6,3,5,4]

Constraints:
The number of nodes in the list is in the range [1, 5 * 10^4]
1 <= node.val <= 1000
.next
.val


Approach: two pointer
  1. find the midpoint
  2. need to be able to iterate right pointer in the opposite direction of how the links are pointing
  3. interleave the reversed 2nd half with the 1st half
  4. use a fast pointer and a slow pointer
    4.1. fast pointer moves at twice the speed of the slow pointer
    4.2. slow pointer moves at half the speed of the fast pointer

1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 => [1,2,| 3,4] => [1,7,2,6,3,5,4]
     F                               L->  <-R
S

Time complexity: 3 loops of n/2 --> 3 loops of n --> n + n + n --> O(n)
Space complexity: O(1)
"""
