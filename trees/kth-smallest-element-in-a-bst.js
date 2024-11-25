/*
https://leetcode.com/problems/kth-smallest-element-in-a-bst
https://neetcode.io/problems/kth-smallest-integer-in-bst

Kth Smallest Element in a BST
Medium

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:
Input: root = [3,1,4,null,2], k = 1
Output: 1
--> see diagram

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
--> see diagram

Constraints:
The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104

Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

If k = 1, it's the smallest element, if k = 2, it's the second smallest element, if k = 3, k is the third smallest element.


Approach: DFS (in-order traversal)
1. put all the elements into an array (this array is naturally sorted)
2. take array[k] from the start of the array
3. stop traversal at kth node

Time complexity: O(n)
Space complexity: O(n)
*/


// class to represent a node in a binary search tree (BST) with a value, left child, and right child
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// function to find the k-th smallest element in a BST
function kSmallestElement(root, k) {
    let inOrder = [];  // example 2: [1, 2, 3, 4, 5, 6]
    dfs(root, inOrder);
    return inOrder[k - 1];
}

// helper function to perform in-order DFS traversal and populate the inOrder array
function dfs(node, inOrder) {
    if (!node) return;
    dfs(node.left, inOrder);
    inOrder.push(node.val);
    dfs(node.right, inOrder);
}

// helper function to build a BST from an array
function arrayToBST(arr, index = 0) {
    if (index >= arr.length || arr[index] === null) return null;
    let node = new TreeNode(arr[index]);
    node.left = arrayToBST(arr, 2 * index + 1);
    node.right = arrayToBST(arr, 2 * index + 2);
    return node;
}


const root1 = arrayToBST([3, 1, 4, null, 2]);
console.log(kSmallestElement(root1, 1));  // output: 1

const root2 = arrayToBST([5, 3, 6, 2, 4, null, null, 1]);
console.log(kSmallestElement(root2, 3));  // output: 3
