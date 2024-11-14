/*
https://leetcode.com/problems/reverse-linked-list/description/
https://neetcode.io/problems/reverse-a-linked-list

Reverse Linked List
Easy

Given the head of a singly linked list, reverse the list, and return the reversed list.
-- see diagrams

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
--> see diagram

Example 2:
Input: head = [1,2]
Output: [2,1]
--> see diagram

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
*/


// definition for singly-linked list node
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// iterative function to reverse the linked list
function reversedLinkedList(head) {
  let curNode = head;  // points to 1/2/3
  let prevNode = null;  // points to null/1/2

  while (curNode) {
    let originalNext = curNode.next;  // node = 2/3/4
    curNode.next = prevNode;  // node = null/1/
    prevNode = curNode;  // node = 1/2/3
    curNode = originalNext; // node = 2/3/4
  }

  return prevNode;
}

// recursive function to reverse the linked list
// function reversedLinkedList(head) {
//   if (!head || !head.next) return head; // Base case
//   let reversedListHead = reversedLinkedList(head.next); // Recursive call
//   head.next.next = head; // Make the next node point back to current
//   head.next = null; // Break the link to prevent cycles
//   return reversedListHead;
// }

// helper function to convert an array to a linked list
function arrayToList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// helper function to print the linked list
function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}


let head1 = arrayToList([1, 2, 3, 4, 5]);
let reversedHead1 = reversedLinkedList(head1);
printList(reversedHead1);  // output: [5, 4, 3, 2, 1]

let head2 = arrayToList([1, 2]);
let reversedHead2 = reversedLinkedList(head2);
printList(reversedHead2);  // output: [2, 1]

let head3 = arrayToList([4]);
let reversedHead3 = reversedLinkedList(head3);
printList(reversedHead3);  // output: [4]

let head4 = arrayToList([]);
let reversedHead4 = reversedLinkedList(head4);
printList(reversedHead4);  // output: []
