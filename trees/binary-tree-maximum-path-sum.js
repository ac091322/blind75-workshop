/*
https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

Binary Tree Maximum Path Sum
Hard

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
--> see diagram

Example 2:
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
--> see diagram

Example 3:
  1
 / \
2   3
   / \
  4   5

2 + 1 + 3 + 5 = 11
4 + 3 + 5 = 12

maxSoFar = 12
maxNoSplit = 8

                            1       maxNoSplit= 1 + max(MNS(1.left), MNS(1.right))
                           / \
        maxNoSplit=2      2   3     maxNoSplit = 3 + max(MNS(3.left), MNS(3.right))
                             / \
        maxNoSplit=4        4   5   maxNoSplit=5

                             1      maxWSplit=1 + leftMaxNoSplit + rightMaxNoSplit
                            / \
        maxNoSplit=2       2   3    maxWSplit= 3 + leftMaxNoSplit + rightMaxNoSplit
                              / \
        maxNoSplit=4         4   5  maxNoSplit=5

                             3      maxNoSplit = 3 + max(MNS(3.left), MNS(3.right), 0)
                            / \
                          -4  -5

Constraints:
The number of nodes in the tree is in the range [1, 3 * 104].
-1000 <= Node.val <= 1000


Approach: DFS

Time complexity: O(n)
Space complexity: O(n)
*/


// Define the TreeNode class
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to find the maximum path sum
function maxPathSum(root) {
    const result = [root.val];
    dfs(root, result);
    return result[0];
}

// Depth-first search helper function
function dfs(root, result) {
    if (root === null) return 0;
    let leftMaxNoSplit = Math.max(dfs(root.left, result), 0);
    let rightMaxNoSplit = Math.max(dfs(root.right, result), 0);
    let maxWithSplit = root.val + leftMaxNoSplit + rightMaxNoSplit;
    result[0] = Math.max(result[0], maxWithSplit);
    return root.val + Math.max(leftMaxNoSplit, rightMaxNoSplit);
}

// Test cases
// Example 1: root = [1, 2, 3]
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

console.log(maxPathSum(root1));  // Output: 6

// Example 2: root = [-10, 9, 20, null, null, 15, 7]
const root2 = new TreeNode(-10);
root2.left = new TreeNode(9);
root2.right = new TreeNode(20);
root2.right.left = new TreeNode(15);
root2.right.right = new TreeNode(7);

console.log(maxPathSum(root2));  // Output: 42

// Example 3: root = [1, 2, 3, null, null, 4, 5]
const root3 = new TreeNode(1);
root3.left = new TreeNode(2);
root3.right = new TreeNode(3);
root3.right.left = new TreeNode(4);
root3.right.right = new TreeNode(5);

console.log(maxPathSum(root3));  // Output: 11
