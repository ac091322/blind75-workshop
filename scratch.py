"""
JP Morgan Chase
Hacker Rank Assessment
Question 1

An e-commerce site has a series of advertisements to display. Links to the ads are stored in a data structure, and they are displayed or not based on the value at a bit position in a number. The sequence of ads being displayed at this time can be represented as a binary value, where 1 means the ad is displayed, and 0 means it is hidden. The ads should rotate, so on the next page load, ads that are displayed now are hidden, and vice versa.

Given a base 10 integer representing the current display state of all ads, determine its binary representation. Starting from the position of its highest order 1 bit, negate that bit and all lower order bits from 0 to 1 or from 1 to 0. Return the base 10 representation of the result.

Example:
base10 = 30
30 (base 10) = 00011110 (base 2)

Strip the insignificant zeroes then flip all of the bits in 11110 (base 2) to get 00001 (base 2) = 1 (base 10). The example shows the value as an 8-bit binary to demonstrate that preceding zeroes are discarded.

Function Description
Complete the function changeAds in the editro Below.

changeAds has the following parameter:
    int base10: an integer in base 10
Return:
    int: the base 10 value of the resulting binary

Constraints:
    0 <= base10 <= 10^5


Approach:
I: a base 10 number (or regular, everyday number)
O: a base 10 number (or regular, everyday number)

0. optional: check the max bits of the current system and use to create leading 0s
1. convert the input base 10 number to binary string
    1.1. remove the "0b" prefix
    1.2. add leading 0s based on the system bits
2. find the first appearance of 1 in the string and get its index
3. flip all bits starting from the first appearance of 1
4. combine the original part with the 0s before the first 1 with the flipped bits
5. convert the binary string back to a base 10 integer
6. return the base 10 integer
"""

# this method causes unintended results
# def changeAds(base10):
#     # the 1s and 0s in negative numbers are automatically flipped from the positive number
#     fliped_binary = bin(-base10)[3::]
#     return int(fliped_binary, 2)


import sys


def changeAds(base10):
    pass


print(changeAds(50))  # output: 13
# 50 (base 10) in binary is 110010 (base 2). Negate each bit in the sequence to get 001101 (base 2) = 13 (base 10)

print(changeAds(30))  # output: 1
# 30 (base 10) in binary is 11110 (base 2). Negate each bit in the sequence to get 00001 (base 2) = 1 (base 10)

print(changeAds(100))  # output: 27
# 100 (base 10) in binary is 1100100 (base 2). Negate each bit in the sequence to get 0011011 (base 2) = 27 (base 10)

print(changeAds(1))  # output: 0
# 1 (base 10) in binary is 1 (base 2). Negate the bit to get 0 (base 2) = 0 (base 10)

print(changeAds(2))  # output: 1
# 2 (base 10) in binary is 10 (base 2). Negate the bit to get 01 (base 2) = 1 (base 10)

print(changeAds(1024))  # output: 1023
# 1024 (base 10) in binary is 10000000000 (base 2). Negate each bit in the sequence starting from the highest 1 bit to get 01111111111 (base 2) = 1023 (base 10)

print(changeAds(10))  # output: 5
# 10 (base 10) in binary is 1010 (base 2). Negate each bit starting from the highest 1 bit to get 0000 (base 2) = 0 (base 10)
