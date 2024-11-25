"""
https://leetcode.com/problems/shuffle-string/description/

Suffled String
Easy

You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

Example 1:
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
--> see diagram

Example 2:
Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.


Constraints:
s.length == indices.length == n
1 <= n <= 100
s consists of only lowercase English letters
0 <= indices[i] < n
All values of indices are unique.
"""

# def restoreString(s: str, indices: list[int]) -> str:
#     hashmap = {}
#     index_bucket = [[] for _ in range(len(s))]
#     # index_bucket = ["" for _ in range(len(s))]

#     i = 0
#     while i < len(s):
#         char = s[i]
#         index = indices[i]
#         hashmap[index] = char
#         i += 1

#     for index, char in hashmap.items():
#         index_bucket[index].append(char)
#         # index_bucket[index] += char

#     flat_index_bucket = [_[0] for _ in index_bucket]
#     return "".join(flat_index_bucket)
#     # return "".join(index_bucket)


def restoreString(s: str, indices: list[int]) -> str:
    result = [0] * len(s)

    for i, char in enumerate(s):
        index = indices[i]
        # indices[index] are the values in the indices list
        # result[4] = "c"
        # result[5] = "o"
        # result = [0, 0, 0, 0, "c", "o", 0, 0]
        result[index] = char

    return "".join(result)


# def restoreString(s: str, indices: list[int]) -> str:
#     result = ["" for _ in range(len(s))]

#     for i in range(0, len(s), 1):
#         char = s[i]
#         index = indices[i]
#         result[index] += char

#     return "".join(result)


print(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]))  # output: "leetcode"
print(restoreString("abc", [0, 1, 2]))  # output: "abc"
