"""
Letter Count I
Easy

Have the function LetterCountI (str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

Examples
Input: "Hello apple pie"
Output: Hello

Input: "No words"
Output: -1


Time complexity: O(n * m) where n is the length of the string input and m is the maximum of any word in the string
Space complexity: O(n + m) where n is the length of the string input and m is the maximum of any word in the string
"""


def letter_count(string):
    word_list = string.split(" ")
    max_repeating_word = ""
    max_repeating_count = 0

    for word in word_list:
        char_counter = {}

        for char in word.lower():
            char_counter[char] = char_counter.get(char, 0) + 1

            highest_char_count = max(char_counter.values())
            if highest_char_count > max_repeating_count:
                max_repeating_count = highest_char_count
                max_repeating_word = word

    return -1 if max_repeating_count <= 1 else max_repeating_word


print(letter_count("Hello apple pie"))  # output: Hello
print(letter_count("No words"))  # output: -1
