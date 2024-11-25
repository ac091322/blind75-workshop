"""
https://leetcode.com/problems/group-anagrams/description/
https://neetcode.io/problems/anagram-groups

Group Anagrams
Medium

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.


Walkthrough:
For input ["eat", "tea", "tan", "ate", "nat", "bat"]:
"eat" -> sorted as "aet" -> hashmap becomes {"aet": ["eat"]}
"tea" -> sorted as "aet" -> hashmap becomes {"aet": ["eat", "tea"]}
"tan" -> sorted as "ant" -> hashmap becomes {"aet": ["eat", "tea"], "ant": ["tan"]}
"ate" -> sorted as "aet" -> hashmap becomes {"aet": ["eat", "tea", "ate"], "ant": ["tan"]}
"nat" -> sorted as "ant" -> hashmap becomes {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"]}
"bat" -> sorted as "abt" -> hashmap becomes {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"], "abt": ["bat"]}
The final result is list(hashmap.values()), which is [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']].


Approach: hashmap
1. create a hashmap to store the sorted strings as keys
2. iterate over the strings:
  2.1. sort the substrings, which turns them into an array, then join them again into a string, they are the keys in the hashmap
  2.2. if the sorted substring is not in the hashmap, set its value to the substring: {sorted_str: substring}
  2.3. if the sorted substring is in the hashmap, append the substring as the value to the existing key
3. return the values of the hashmap as a list

Time complexity: O(n * m lo gm) because each string is sorted, which takes O(m log m), and there are n strings
Space complexity: O(n * m) because we store all strings in the hashmap and their sorted forms require additional space
"""


def group_anagrams(strs):
    hashmap = {}

    for substring in strs:
        # sort the string so all anagrams become the same string, and will be the same key in the hashmap
        sorted_str = "".join(sorted(substring))

        # if the sorted string is not in the hashmap, that means it's the first time it's been encountered
        if sorted_str not in hashmap:
            hashmap[sorted_str] = [substring]
        # if the sorted string is in the hashmap, append the substring as a value to the existing key
        else:
            hashmap[sorted_str].append(substring)

    return list(hashmap.values())  # similar to Object.values(hashmap) in js
    # just returning hashmap.values() returns a dict_values object: dict_values([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])


print(
    group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
)  # output: [["bat"],["nat","tan"],["ate","eat","tea"]]
print(group_anagrams(["a"]))  # output: [["a"]]
print(group_anagrams([""]))  # output: [[""]]
