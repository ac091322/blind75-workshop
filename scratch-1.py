def length_of_longest_substring(s) -> int:
    char_map = {}
    result = left = 0

    for right in range(0, len(s), 1):
        if s[right] in char_map:
            left = max(left, char_map[s[right]] + 1)

        char_map[s[right]] = right
        result = max(result, right - left + 1)

    return result


print(length_of_longest_substring("abcabcbb"))  # output: 3
print(length_of_longest_substring("abcbacbab"))  # output: 3
print(length_of_longest_substring("abccacbab"))  # output: 3
print(length_of_longest_substring("abcabcbbabcde"))  # output: 5
print(length_of_longest_substring("bbbbb"))  # output: 1
print(length_of_longest_substring("pwwkew"))  # output: 3
