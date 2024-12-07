/*
https://leetcode.com/problems/container-with-most-water/description/
https://neetcode.io/problems/max-water-container

Container With Most Water
Medium

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
--> see diagram

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Example 3:
input: height = [2,3,2]
  |
| | |
| | |
0 1 2
output: 4

Example 4:
Input: [1,6,8,3,9,1]
        |
    |   |
    |   |
  | |   |
  | |   |
  | |   |
  | | | |
  | | | |
| | | | | |
0 1 2 3 4 5
Output: 18

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104


Approach: two pointer
Height is the value of the lower pointer
Width is the length between the left/right pointers
If equal, decrement either the left or right pointer
        |
    |   |
    |   |
  | |   |
  | |   |
  | |   |
  | | | |
  | | | |
| | | | | |
0 1 2 3 4 5
L         R --> (5 - 0) * 1 = 5
L       R   --> (4 - 0) * 1 = 4
  L     R   --> (4 - 1) * 3 = 18
    L   R   --> (4 - 2) * 8 = 16
      L R   --> (4 - 3) * 3 = 3

1. create left/right pointers at opposite ends of the input array
2. set a variable to keep track of max area seen so far
3. iterate until pointers cross
  3.1. set left and right heights and take the minimum of left and right heights
  3.2. multiple the minimum by the distance or width of the container measured by the distance between the pointers (right pointer - left pointer)
  3.3. compare current area with max seen and update the max seen if needed
  3.4. increment or decrement the left or right pointer based on whichever one is lower
  3.5. if left/rigth pointers are of the same height, decrement either one (the right pointer)
4. return the max area seen so far


Time complexity: O(n)
Space complexity: O(1)
*/


function maxArea(heights) {
  let leftIdx = 0;
  let rightIdx = heights.length - 1;
  let maxArea = -Infinity;

  while (left < right) {
    let leftHeight = heights[leftIdx];
    let rightHeight = heights[rightIdx];
    let containerWidth = rightIdx - leftIdx;
    let area = containerWidth * Math.min(leftHeight, rightHeight);
    maxArea = Math.max(maxArea, area);

    if (leftHeight < rightHeight) {
      leftIdx += 1;
    } else {
      rightIdx -= 1;
    }
  }

  return maxArea
}


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));  // output: 49
console.log(maxArea([2, 3, 2]));  // output: 4
console.log(maxArea([1, 1]));  // output: 1
console.log(maxArea([1, 6, 8, 3, 9, 1]));  // output: 18
