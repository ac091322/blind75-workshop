"""
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
https://neetcode.io/problems/buy-and-sell-crypto

Best Time to Buy and Sell Stock
Easy

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104


Time complexity: O(n)
Space complexity: O(1)
"""


# brute force O(n^2)
# will exceed time limit on LeetCode
def max_profit(prices) -> int:
    max_profit = 0

    for i in range(0, len(prices), 1):
        buy_price = prices[i]

        for j in range(i + 1, len(prices), 1):
            sell_price = prices[j]
            max_profit = max(max_profit, sell_price - buy_price)

    return max_profit


# two pointers
def max_profit(prices) -> int:
    cur_day, later_day = 0, 1
    max_profit = 0

    while later_day < len(prices):
        if prices[cur_day] < prices[later_day]:
            profit = prices[later_day] - prices[cur_day]
            max_profit = max(max_profit, profit)
        else:
            # if the price of the current day is greater than or equal to the later day, then set the current day to the later day
            cur_day = later_day

        later_day += 1

    return max_profit


# dynamic programming
def max_profit(prices) -> int:
    max_profit = float("-inf")
    min_buy_price = prices[0]

    # iterate one time, while updating the min buy price as it goes
    for sell_price in prices:
        max_profit = max(max_profit, sell_price - min_buy_price)

        # update the min buy price when a lower one is found
        min_buy_price = min(min_buy_price, sell_price)

    return max_profit


print(max_profit([7, 1, 5, 3, 6, 4]))  # output: 5
print(max_profit([7, 6, 4, 3, 1]))  # output: 0
print(max_profit([5, 9, 15, 4, 2, 10, 4, 6, 17, 10]))  # output: 15
print(max_profit([5, 9, 15, 4, 2, 10, 4, 6, 17, 1, 10]))  # output: 15
