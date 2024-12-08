def length_of_longest_substring(s) -> int:
    char_map = {}
    left_pointer = 0
    result = 0

    for right_pointer in range(0, len(s), 1):
        right_char = s[right_pointer]

        if right_char in char_map:
            left_pointer = max(left_pointer, char_map[right_char] + 1)

        char_map[right_char] = right_pointer
        result = max(result, right_pointer - left_pointer + 1)

    return result


print(length_of_longest_substring("abcabcbb"))  # output: 3
print(length_of_longest_substring("abcabcbbabcde"))  # output: 5
print(length_of_longest_substring("bbbbb"))  # output: 1
print(length_of_longest_substring("pwwkew"))  # output: 3
