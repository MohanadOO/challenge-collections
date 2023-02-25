//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description

function maxProfit(prices: number[]): number {
  let min = Infinity
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i]
    if (price > min) profit = Math.max(profit, price - min)
    min = Math.min(min, prices[i])
  }

  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
