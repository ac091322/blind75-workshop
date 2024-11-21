"""
https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

Time Conversion
Basic

Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note:
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
"""


def timeConversion(s):
    period = s[-2:]
    hour, minute, second = map(int, s[:-2].split(":"))

    if period == "PM" or period == "pm":
        if hour != 12:
            hour += 12
    elif period == "AM" or period == "am":
        if hour == 12:
            hour += 12

    return f"{hour:02}:{minute:02}:{second:02}"



print(timeConversion("12:01:00PM"))  # output: 12:01:00
print(timeConversion("12:01:00AM"))  # output: 12:01:00
print(timeConversion("7:05:45PM"))  # output: 19:05:45
