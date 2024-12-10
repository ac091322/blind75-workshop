# sliding window
# time complexity: O(m * n) where n is the length of the string and m is the total number of unique characters in the string
# space complexity: O(m) where m is the total num ber of unique characters in the string
def character_replacement(s: str, k: int) -> int:
    pass


# sliding window (optimal)
# time complexity: O(n) where n is the length of the string
# space complexity: O(m) where m is the total num ber of unique characters in the string
def character_replacement(s: str, k: int) -> int:
    pass


print(character_replacement("ABAB", 2))  # output: 4
print(character_replacement("AABABBA", 1))  # output: 4
print(character_replacement("CAABCBABBA", 2))  # output: 6
print(character_replacement("CACABCCBABCCCBA", 2))  # output: 5
print(character_replacement("AABABBCCCBBZBBZZZBBZBA", 3))  # output: 7
