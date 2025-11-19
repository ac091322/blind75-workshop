"""
Maximum Likes
Hard

You are a TikTok content creator with predictions about which trends will be popular over the next n days. These trends are represented by an array prediction, where the trend that will be popular on the i-th day is given by prediction[i].

Before the trends gain popularity, you need to select a set of trends to focus on. For each trend x that you choose, you will earn x likes every time that trend appears in the prediction array. However, to maintain diversity in your content, if you choose the x-th trend, you cannot choose the (x - 1)^th or (x + 1)^th trends, as they are considered too similar.

Your objective is to maximize the total number of likes you can earn by carefully selecting which trends to focus on. Since the total number of likes can be large, return your answer modulo 10^9 + 7.

The problem is a variation of the House Robber problem (Dynamic Programming), where selecting a trend prevents you from selecting adjacent trends. The goal is to maximize the total likes earned, while ensuring no adjacent values are selected.

Example
Suppose n = 3, prediction = [1, 3, 2]
Choose trends 1 and 3. You will get 1 like on the first day and 3 likes on the second day.
Hence, the answer is 4.

getMaxScore has the following parameter(s):
- int prediction[n]: an array of integers

Returns
- int: the maximum possible likes modulo 10^9 + 7

Constraints
1 ≤ n ≤ 2 * 10^5
1 ≤ prediction[i] ≤ 2 * 10^5

Sample Case 0
Sample Input For Custom Testing
STDIN       FUNCTION
-----       --------
2           prediction[] size n = 2
1           prediction = [1, 3]
3

Sample Output
4

Explanation
Choose trends 1 and 3. You will get 0 likes on first day, 1 like on second day, and 3 likes on the third day.
"""


def maximumLikes(prediction):
    modulo = 1e9 + 7

    max_val = max(prediction)
    count = [0 for _ in range(max_val + 1)]


    for num in prediction:
        count[num] += num

    prev, curr = 0, 0

    for i in range(0, max_val + 1, 1):
        new_curr = max(curr, prev + count[i])
        prev = curr
        curr = new_curr

    return int(curr % modulo)


print(maximumLikes([1, 3]))  # output: 4
print(maximumLikes([1, 1, 1, 10, 10, 11, 11, 12, 12]))  # output: 47
print(maximumLikes([1, 1, 1, 2, 2, 2, 3, 3, 3]))  # output: 6
print(maximumLikes([2, 2, 3, 3, 4, 4, 10, 100, 1000]))  # output: 1122
