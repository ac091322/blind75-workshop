/*
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
*/


// brute force O(n^2)
function maxProfit(prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i += 1) {
        let buyPrice = prices[i];

        for (let j = i + 1; j < prices.length; j += 1) {
            let sellPrice = prices[j];

            maxProfit = Math.max(maxProfit, sellPrice - buyPrice);
        }
    }

    return maxProfit;
}

// two pointers
function maxProfit(prices) {
    let curDay = 0, laterDay = 1;
    let maxProfit = 0;

    while (laterDay < prices.length) {
        if (prices[curDay] < prices[laterDay]) {
            let profit = prices[laterDay] - prices[curDay];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            curDay = laterDay;
        }

        laterDay += 1;
    }

    return maxProfit;
}

// dynamic programming
function maxProfit(prices) {
    let maxProfit = -Infinity;
    let minBuyPrice = prices[0];

    for (let sellPrice of prices) {
        maxProfit = Math.max(maxProfit, sellPrice - minBuyPrice);
        minBuyPrice = Math.min(minBuyPrice, sellPrice);
    }

    return maxProfit;
}


console.log(maxProfit([7, 1, 5, 3, 6, 4]));  // output: 5
console.log(maxProfit([7, 6, 4, 3, 1]));  // output: 0
console.log(maxProfit([5, 9, 15, 4, 2, 10, 4, 6, 17, 10]));  // output: 15
console.log(maxProfit([5, 9, 15, 4, 2, 10, 4, 6, 17, 1, 10]));  // output: 15
