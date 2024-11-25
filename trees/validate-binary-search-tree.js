/*
https://leetcode.com/problems/validate-binary-search-tree/description/
https://neetcode.io/problems/valid-binary-search-tree

Validate Binary Search Tree
Medium

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:
Input: root = [2,1,3]
Output: true
--> see diagram

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
--> see diagram

Example 3:
Input = root = [1]
Output: true

Example 3:
Input = root = [2,3,1]
Output: false

Example 4:
input = root = [5,3,7,null,null,4,8]
Output: false
                          5         min = -Inf, max = Inf
                         / \
min = -Inf, max = 5     3   7       min = 5, max = Inf
                           / \
min = 5, max = 7          4   8     min = 7, max = Inf


Constraints:
The number of nodes in the tree is in the range [1, 10^4].
-2^31 <= Node.val <= 2^31 - 1


Approach 1:
1. put everything into an array
2. check if the array is sorted
3. if array is sorted, it is a valid BST

Appraoch 2: DFS
1. set a maximum and minimum value
  1.1. set minimum to -infinity
  1.2. set maximum to infinity
2. when we're in the right subtree, update the min value
3. when we're in the left subtree, update the max value
4. check if the current node is between the maximum and minimum values

Time complexity: O(n)
Space complexity: O(n)
*/


// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function validateBinarySearchTree(root, min = -Infinity, max = Infinity) {
    if (root === null) return true;

    // Check if the current node's value is within the valid range
    if (root.val <= min || root.val >= max) {
        return false;
    }

    // Recursively check the left and right subtrees
    return validateBinarySearchTree(root.left, min, root.val) &&
        validateBinarySearchTree(root.right, root.val, max);
}

// Helper function to create a tree from an array
function createTreeFromArray(arr) {
    if (!arr.length) return null;
    let nodes = arr.map(val => val === null ? null : new TreeNode(val));
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            let leftIndex = 2 * i + 1;
            let rightIndex = 2 * i + 2;
            if (leftIndex < arr.length) nodes[i].left = nodes[leftIndex];
            if (rightIndex < arr.length) nodes[i].right = nodes[rightIndex];
        }
    }
    return nodes[0];  // Return the root of the tree
}

// Example Test Cases
let root1 = createTreeFromArray([2, 1, 3]);
console.log(validateBinarySearchTree(root1));  // output: true

let root2 = createTreeFromArray([5, 1, 4, null, null, 3, 6]);
console.log(validateBinarySearchTree(root2));  // output: false

let root3 = createTreeFromArray([1]);
console.log(validateBinarySearchTree(root3));  // output: true

let root4 = createTreeFromArray([2, 3, 1]);
console.log(validateBinarySearchTree(root4));  // output: false
