/**
 * 122. Best Time to Buy and Sell Stock II
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] > minPrice) {
      maxProfit = maxProfit + prices[i] - minPrice;
      minPrice = prices[i];
    }
  }
  return maxProfit;
};

let prices = [7, 1, 3, 5, 4, 2];

console.log(maxProfit(prices));
