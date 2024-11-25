"""
https://leetcode.com/problems/reverse-linked-list/description/
https://neetcode.io/problems/reverse-a-linked-list

Reverse Linked List
Easy

Given the head of a singly linked list, reverse the list, and return the reversed list.
-- see diagrams

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Example 4:
Input: head [4]
Output: [4]

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

What is the API that will be use to access the nodes?
API for all nodes in our list:
  - .next
  - .val


Approach: two pointer
  1. set one pointer on the head or current node
  2. set the other pointer (trailing pointer) on the previous node
  3. while there are nodes left to be reversed, create a temp variable to take the current node's .next value
  4. set the current node's next value to the previous node
  5. set the previous node to the current node, and set that node as the temp variable
  6. return the previous node at the end
"""
