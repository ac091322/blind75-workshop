/*
https://leetcode.com/problems/pacific-atlantic-water-flow/description/
https://neetcode.io/problems/pacific-atlantic-water-flow

Pacific Atlantic Water Flow
Medimum

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

Example 1:
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
--> see diagram

Example 2:
Input: heights = [[1]]
Output: [[0,0]]
Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

Constraints:
m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 10^5


Approach:
1. create two hashmaps to store coords of cells that can reach the atlantic and pacific oceans respectively: atlantic {} pacific {}
2. iterate over the border initially and dfs all of the squares on the borders so we know which squares can get to the border, mark these positions in our hashmap.
    2.1. when considering neighbors we need to look for squares that are greater than or equal to our curr node since we're starting from the ocean and working inland.
    2.2. make one more pass and check each position. If a position is in both hashmaps then that square can reach both oceans we should add it to our output

Time complexity: O(n * m)
Space complexity: O(n * m)
*/


const pacificAtlantic = (heights) => {
    const ROWS = heights.length;
    const COLS = heights[0].length;
    const pacific = new Set();
    const atlantic = new Set();

    const dfs = (r, c, visited, prevHeight) => {
        const coord = `${r},${c}`;
        if (
            r < 0 || c < 0 || r >= ROWS || c >= COLS ||  // out of bounds
            visited.has(coord) ||  // already visited
            heights[r][c] < prevHeight  // height restriction
        ) {
            return;
        }

        visited.add(coord);
        dfs(r + 1, c, visited, heights[r][c]);
        dfs(r - 1, c, visited, heights[r][c]);
        dfs(r, c + 1, visited, heights[r][c]);
        dfs(r, c - 1, visited, heights[r][c]);
    };

    // Process the edges
    for (let i = 0; i < ROWS; i++) {
        dfs(i, 0, pacific, heights[i][0]);  // left edge (Pacific)
        dfs(i, COLS - 1, atlantic, heights[i][COLS - 1]);  // right edge (Atlantic)
    }

    for (let j = 0; j < COLS; j++) {
        dfs(0, j, pacific, heights[0][j]);  // top edge (Pacific)
        dfs(ROWS - 1, j, atlantic, heights[ROWS - 1][j]);  // bottom edge (Atlantic)
    }

    // Collect cells reachable by both oceans
    const res = [];
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            const coord = `${i},${j}`;
            if (pacific.has(coord) && atlantic.has(coord)) {
                res.push([i, j]);
            }
        }
    }

    return res;
};
