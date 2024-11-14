/*
https://leetcode.com/problems/invert-binary-tree/description/
https://neetcode.io/problems/invert-a-binary-tree

Invert Binary Tree
Easy

Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
--> see diagram

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
--> see diagram

Example 4:
Input:  2
         \
          3
Output: 2
       /
      3

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Every node will have:
  .left
  .right
  .val


Approach: recursive depth first traversal
1. recurse down to the leaves
2. store original connections to left and right of current node in temp variables
3. overwrite current node's .left to be the temp right variable
4. overwrite current node's .right to be the temp right variable
5. return the root at the end

      4
   /    \
  7      2
 / \    / \
9   6  3   1

Time complexity: O(n) where n is the number of nodes in the tree
Space complexity: O(n) where n is the numbrer of nodes in the tree (worst case scenario will grow to the depth of the tree)
*/


// TreeNode class for representing binary tree nodes
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Helper function to build a binary tree from an array
function buildTree(arr) {
    if (!arr.length) return null;

    const nodes = arr.map(val => val !== null ? new TreeNode(val) : null);
    for (let i = 0; i < arr.length; i++) {
        if (nodes[i] !== null) {
            nodes[i].left = nodes[2 * i + 1] || null;
            nodes[i].right = nodes[2 * i + 2] || null;
        }
    }
    return nodes[0];
}

// Invert binary tree function
function invertTree(root) {
    if (!root) return null;  // Check if root is null before recursion

    // Recursively invert left and right subtrees
    let left = invertTree(root.left);
    let right = invertTree(root.right);

    // Swap left and right children
    root.left = right;
    root.right = left;

    return root;
}

// Helper function to display the tree as an array (for testing)
function treeToArray(root) {
    const result = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    while (result[result.length - 1] === null) result.pop();
    return result;
}


// Test cases
const root1 = buildTree([4, 2, 7, 1, 3, 6, 9]);
console.log(treeToArray(invertTree(root1))); // output: [4, 7, 2, 9, 6, 3, 1]

const root2 = buildTree([2, 1, 3]);
console.log(treeToArray(invertTree(root2))); // output: [2, 3, 1]

const root3 = buildTree([]);
console.log(treeToArray(invertTree(root3))); // output: []

const root4 = buildTree([2, 3]);
console.log(treeToArray(invertTree(root4))); // output: [2,null,3]
