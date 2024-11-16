"""
https://leetcode.com/problems/path-crossing/description/

Path Crossing
Easy

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

Example 1:
Input: path = "NES"
Output: false
Explanation: Notice that the path doesn't cross any point more than once.

Example 2:
Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.

Constraints:
1 <= path.length <= 104
path[i] is either 'N', 'S', 'E', or 'W'


Approach: hashmap
1. set origin to (0, 0)
2. use a set to keep track of visited positions
3. put the origin in the set
4. iterate over the path:
  4.1. if "N" go up by 1
  4.2. if "S" go down by 1
  4.3. if "E" go right by 1
  4.4. if "W" go left by 1
  4.5. put every visited position into the visited set
  4.6. if any position has been visited, return true
5. if no positions have been visited, return false

Walkthrough: "NESSWN"
origin {(0, 0), N (0, 1)}
origin {(0, 0), N (0, 1), E (1, 1)}
origin {(0, 0), N (0, 1), E (1, 1), S (1, 0)}
origin {(0, 0), N (0, 1), E (1, 1), S (1, 0), S (1, -1)}
origin {(0, 0), N (0, 1), E (1, 1), S (1, 0), S (1, -1), W (0, -1)}
origin {(0, 0), N (0, 1), E (1, 1), S (1, 0), S (1, -1), W (0, -1), N (0, 0) } but already returns true before this move

Time complexity: O(n) to iterate once over the input string
Space complexity: O(n) in worst case if there are no revisited positions
"""


def path_crossing(path):
    x, y = 0, 0
    visited = set()  # use a set to track visited positions
    visited.add((x, y))  # add the origin to visited

    for char in path:
        if char == "N":
            y += 1
        elif char == "S":
            y -= 1
        elif char == "E":
            x += 1
        elif char == "W":
            x -= 1

        if (x, y) in visited:
            return True

        visited.add((x, y))  # add the current position to visited

    return False


print(path_crossing("NES"))  # output: false
print(path_crossing("NESSW"))  # output: false
print(path_crossing("NESSWN"))  # output: true
print(path_crossing("NESWW"))  # output: true
