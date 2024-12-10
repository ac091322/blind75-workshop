# sliding window (optimal)
# time complexity: O(n) where n is the length of the string
# space complexity: O(m) where m is the total num ber of unique characters in the string
def character_replacement(s: str, k: int) -> int:
    char_counter = {}
    result = left = max_char_freq = 0

    for right in range(0, len(s), 1):
        char_counter[s[right]] = char_counter.get(s[right], 0) + 1
        max_char_freq = max(max_char_freq, char_counter[s[right]])

        while (right - left + 1) - max_char_freq > k:
            char_counter[s[left]] -= 1
            left += 1

        result = max(result, right - left + 1)

    return result


print(character_replacement("ABAB", 2))  # output: 4
print(character_replacement("AABABBA", 1))  # output: 4
print(character_replacement("CAABCBABBA", 2))  # output: 6
print(character_replacement("CACABCCBABCCCBA", 2))  # output: 5
print(character_replacement("AABABBCCCBBZBBZZZBBZBA", 3))  # output: 7
