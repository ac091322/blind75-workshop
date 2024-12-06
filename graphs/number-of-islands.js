/*
https://leetcode.com/problems/number-of-islands/description/
https://neetcode.io/problems/count-number-of-islands

Num Islands
Medium

Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Example 3:
Input: grid = [
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 0

Example 4:
Input: grid = [
  ["1","1","0","0","1"],
  ["1","1","0","0","1"],
  ["0","0","0","0","1"],
  ["0","0","0","1","1"]
]
Output: 2

Example 5:
Input: grid = [
  ["1","1","1","1","1"],
  ["1","0","1","0","1"],
  ["1","1","1","0","1"],
  ["0","0","0","1","1"]
]
Output: 1

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'


Approach: DFS (can also use BFS with same time and space)
1. iterate over the grid
    1.1. when we encounter a 1, we DFS it to get all the neighbors and mark them
    1.2. increase the count by 1 once we've marked the whole island
    1.3. continue iterating skipping over seen nodes
2. return the count

Time complexity: 0(n * m)
Space complexity: 0(n * m)
*/


function dfs(i, j, grid, visited) {
  const stack = [[i, j]];
  while (stack.length) {
    let [x, y] = stack.pop();
    if (visited[`${x}${y}`]) continue;
    visited[`${x}${y}`] = true;
    let neighbors = getValidNeighbors(x, y, grid, visited);
    stack.push(...neighbors)
  }
}

function numIslands(grid) {
  let visited = {};
  let count = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      let currSquare = grid[i][j];
      if (visited[`${i}${j}`] || currSquare == "0") continue;
      dfs(i, j, grid, visited);
      count += 1
    }
  }

  return count;
}

function getValidNeighbors(i, j, grid, visited) {
  const validNeighbors = [];
  const neighborCoords = [
    [i + 1, j],
    [i - 1, j],
    [i, j + 1],
    [i, j - 1]
  ]
  for (let k = 0; k < neighborCoords.length; k++) {
    let [a, b] = neighborCoords[k];
    if (a < 0 || a > grid.length || b < 0 || b > grid[a].length - 1) continue;
    let neighbor = grid[a][b];
    if (neighbor === "0") continue;
    validNeighbors.push([a, b])
  }
  return validNeighbors
}


console.log(numIslands());  // output:
