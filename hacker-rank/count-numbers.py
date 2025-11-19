"""
JP Morgan Chase
Hacker Rank
Question 1

Given a range of integers, determine how many numbers have no repeating digits.

Example:
n = 80
m = 120

The lower and upper bounds are inclusive, so there are 120 - 79 = 41 values in the range. Numbers without repeating characters are normal weight, and others are bold. The two columns to the right are the valid number counts per row (normal weight) and invalid number counts (bold).
--> see diagram

There are 27 numbers with no repeating digits and 14 other numbers in the range. Print 27.

Function Description:
Complete the function countNumbers in the editor below.

countNumbers has the following parameter(s):
int arr[q][2]: integer pairs representing inclusive lower (n) and upper (m) range limits

Print:
For each pair arr[i], print the number of integers in the inclusive range that qualify. There is no value to return from the function.

Constraints:
1 <= q <= 10^5
1 <= n <= m <= 10^6

Input Format for Custom Testing:
Input from stdin will be processed as follows and passed to the function.
The first line contains an integer q, the number of rows in the two-dimensional array arr.
The second line contains the integer 2, the number of columns in arr.
Each of the next q lines contains two space-separated integers n and m for each arr[i].

Sample Case 0:
Sample Input 0
STDIN       Function
-----       --------
2           arr[] size q = 2
2           arr[i][] size = 2 (always)
1 20        arr = [[1, 20], [9, 19]]
9 19

Sample Output 0:
19
10

Explanation 0:
Row 0 = [1, 20]
The set of qualifying numbers in the inclusive range between n[0] = 1 and m[0] = 20 is {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}. This gives us c[0] = 19.

Row 1 = [9, 19]
The set of qualifying numbers in the inclusive range between n[1] = 9 and m[1] = 19 is {9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19}. This gives us c[1] = 10.

Sample Case 1:
STDIN       Function
-----       --------
5           arr[] size q = 5
2           arr[i][] size = 2
7 8         arr = [[7, 8], [52, 80], [34, 84], [57, 64], [74, 78]]
52 80
34 84
57 64
74 78

Sample Output 1:
2
26
47
8
4

Explanation 1:
Row 0 = [7, 8]
The set of qualifying numbers in the inclusive range between n[0] = 7 and m[0] = 8 is {7, 8}. This gives us c[0] = 2.

Row 1 = [52, 80]
The set of qualifying numbers in the inclusive range between n[1] = 52 and m[1] = 80 is {52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80}. This gives us c[1] = 26.

Row 2 = [34, 84]
The set of qualifying numbers in the inclusive range between n[2] = 34 and m[2] = 84 is {34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84}. This gives us c[2] = 47.

Row 3 = [57, 64]
The set of qualifying numbers in the inclusive range between n[3] = 57 and m[3] = 64 is {57, 58, 59, 60, 61, 62, 63, 64}. This gives us c[3] = 8.

Row 4 = [74, 78]
The set of qualifying numbers in the inclusive range between n[3] = 74 and m[3] = 78 is {74, 75, 76, 77, 78}. This gives us c[3] = 5.


Approach: brute force
I: 2D list
O: individual numbers representing the number of non-repeating numbers

1. create a helper function to check if a number has repeated digits:
    1.1. convert the number to a string representation
    1.2. find the length of the number string
    1.3. create a set with the number string
    1.4. compare the length of the number string to the set, if they are not equal, the number has repreated digits
2. create a results variable to store the no repeated digit count for each subset in the input list
3. iterate through 2D list:
    3.1. create a counter in the scope of the outer for loop to keep track of the no repeated count
    3.2. iterate through the nested lists
        3.2.1. set the range from the first number (inclusive) in the nested list to the second number (inclusive)
        3.2.2. call the helper function to check if each number has repeated digits
        3.2.3. if the number does not, increase the no repeat count by 1
    3.3. store the no repreated count in the results
4. iterate through the results list to print each result

Time complexity (helper function): O(n) where n is the number of digits in num
Space complexity (helper function): O(n) where n is the number of digits in num
Time complexity (main function): O(n log n) where n is the size of the largest range [start, end] in any subset
Space complexity (main function): O(n) where n is the number of subsets in arr
"""


def has_repeated_digits(num):
    num_str = str(num)
    # if the length of the string and the length of the set are not equal, it means the number has repeating digits, and the function returns true
    # if number is 12, set is {'1', '2'}, then the length of "12" is equal to length of the set
    # if number is 11, set is {'1'}, then length of "11" is not equal to length of the set
    num_set = set(num_str)
    return len(num_str) != len(num_set)


def countNumbers(arr):
    results = []

    for subset in arr:
        # no_repeat_count is scoped within the outer loop, at the start of each new subset, it resets to 0
        no_repeat_count = 0

        for i in range(subset[0], subset[1] + 1, 1):
            if not has_repeated_digits(i):
                no_repeat_count += 1
        results.append(no_repeat_count)

    [print(count) for count in results]
    # the generator expression will not print anything because it lazily evaluates the print(count) statement, meaning the code does not actually execute the print calls unless the generator is iterated over
    # (print(count) for count in results)


print(countNumbers([[1, 20], [9, 19]]))  # output: 19, 10
print(
    countNumbers([[7, 8], [52, 80], [34, 84], [57, 64], [74, 78]])
)  # output: 2, 26, 47, 8, 4
print(countNumbers([[5, 15], [10, 30], [100, 110]]))  # output: 10, 19, 8
print(countNumbers([[50, 60], [100, 120], [200, 220]]))  # output: 10, 9, 16
