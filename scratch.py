


def letter_count(string):
    word_list = string.split(" ")
    max_repeating_word = ""
    max_repeating_count = 0

    for word in word_list:
        charCounter = {}

        for char in word.lower():
            charCounter[char] = charCounter.get(char, 0) + 1

            highest_char_count = max(charCounter.values())
            if highest_char_count > max_repeating_count:
                max_repeating_count = highest_char_count
                max_repeating_word = word

    return -1 if max_repeating_count <= 1 else max_repeating_word





print(letter_count("Hello apple pie"))  # output: Hello
print(letter_count("No words"))  # output: -1
print(letter_count("Check this word out: feeccwwllcc"))  # output: feeccwwllcc
