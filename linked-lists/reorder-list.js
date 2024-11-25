/*
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
--> see diagram

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
--> see diagram

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
*/


// definition for singly-linked list node
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// function to reorder the list
function reorderList(head) {
    if (!head || !head.next) return;

    // find the midpoint
    let slowPointer = head;
    let fastPointer = head.next
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }

    // reverse the links in the 2nd half of the list
    let secondNodePointer = slowPointer.next
    slowPointer.next = null
    let prevNode = null
    while (secondNodePointer !== null) {
        let temp = secondNodePointer.next
        secondNodePointer.next = prevNode
        prevNode = secondNodePointer
        secondNodePointer = temp;
    }

    // merge the 2nd half back into the first
    let firstNodePointer = head
    secondNodePointer = prevNode
    while (secondNodePointer !== null) {
        let temp1 = firstNodePointer.next
        let temp2 = secondNodePointer.next
        firstNodePointer.next = secondNodePointer
        secondNodePointer.next = temp1
        firstNodePointer = temp1
        secondNodePointer = temp2
    }
}

// helper function to convert an array to a linked list
function arrayToList(arr) {
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


let head1 = arrayToList([1, 2, 3, 4]);
reorderList(head1);
printList(head1);  // output: [1, 4, 2, 3]

let head2 = arrayToList([1, 2, 3, 4, 5]);
reorderList(head2);
printList(head2);  // output: [1, 5, 2, 4, 3]

let head3 = arrayToList([1, 2, 3, 4, 5, 6, 7]);
reorderList(head3);
printList(head3);  // output: [1, 7, 2, 6, 3, 5, 4]
