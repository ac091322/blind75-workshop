/*
https://leetcode.com/problems/same-tree/description/
https://neetcode.io/problems/same-binary-tree

Same Tree
Easy

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true
--> see diagram

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false
--> see diagram

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
--> see diagram

Example 4:
p = [], q = []
Output: true

Constraints:
The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104

Approach: breath first traversal
1. create a queue and put p and q in it as a tuple [[p, q]]
2. while queue.length:
  2.1. shift off current tuple
  2.2. compare p and q's nodes and return false if they are different
  2.3. otherwise push on their children
3. return true if we didn't return false earlier

Time complexity: O(n) where n is the number of nodes in the tree
Space complexity: O(w) where w is the widest row of the tree (in a complete tree the last row is actually going to approach n/2 which would mean O(n) space)
*/


// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to check if two binary trees are the same
function sameTree(p, q) {
    let queue = [[p, q]];

    while (queue.length) {
        let [nodeA, nodeB] = queue.shift();

        // If both nodes are null, continue to the next pair
        if (!nodeA && !nodeB) continue;

        // If only one of them is null or their values are different, return false
        if (!nodeA || !nodeB || nodeA.val !== nodeB.val) {
            return false;
        }

        // Add children pairs to the queue
        queue.push([nodeA.left, nodeB.left]);
        queue.push([nodeA.right, nodeB.right]);
    }

    return true;
}

// Helper function to build a binary tree from an array
function buildTreeFromArray(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let node = queue.shift();

        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}


// Test cases
let p1 = buildTreeFromArray([1, 2, 3]);
let q1 = buildTreeFromArray([1, 2, 3]);
console.log(sameTree(p1, q1));  // Output: true

let p2 = buildTreeFromArray([1, 2]);
let q2 = buildTreeFromArray([1, null, 2]);
console.log(sameTree(p2, q2));  // Output: false

let p3 = buildTreeFromArray([1, 2, 1]);
let q3 = buildTreeFromArray([1, 1, 2]);
console.log(sameTree(p3, q3));  // Output: false

let p4 = buildTreeFromArray([]);
let q4 = buildTreeFromArray([]);
console.log(sameTree(p4, q4));  // Output: true
