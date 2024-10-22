def is_palinedrome(s):
    filtered_S = ""

    for char in s:
        if (
            ord("a") <= ord(char) <= ord("z")
            or ord("A") <= ord(char) <= ord("Z")
            or ord("0") < ord(char) < ord("9")
        ):
            filtered_S += char.lower()

    return filtered_S == filtered_S[::-1]


print(is_palinedrome("A man, a plan, a canal: Panama"))  # output: True
print(is_palinedrome("race a car"))  # output: False
print(is_palinedrome(" "))  # output: True
