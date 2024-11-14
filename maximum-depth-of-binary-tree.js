/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/
https://neetcode.io/problems/depth-of-binary-tree

Maximum Depth of Binary Tree
Easy

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3
--> see diagram

Example 2:
Input: root = [1,null,2]
Output: 2
  1
   \
    2

Example 3:
Input: root = []
Output: 0

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100


Approach: iterative depth first search
1. create a stack and put the root onto it with the current depth [[root, 1]]
2. keep track of the the max depth seen so far
3. while stack.length:
  3.1. pop off current node and its depth
  3.2. compare it to the max depth seen so far and update if needed
  3.3. push .left and .right children of the current node and the new depth --> [[node.left, curDepth + 1]] and [[node.right, curDepth + 1]]
4. return the max depth seen

Time complexity:
Space complexity:
*/


// Define the TreeNode class
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to create a binary tree from an array
function arrayToTree(arr) {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const node = queue.shift();

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

// Max Depth function
function maxDepth(root) {
    let max = 0;
    if (!root) return max;

    const stack = [[root, 1]];
    while (stack.length) {
        let [node, depth] = stack.pop();
        max = Math.max(max, depth);
        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);
    }

    return max;
}


// Test the function with binary tree input
const tree1 = arrayToTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(tree1));  // output: 3

const tree2 = arrayToTree([1, null, 2]);
console.log(maxDepth(tree2));  // output: 2

const tree3 = arrayToTree([]);
console.log(maxDepth(tree3));  // output: 0
