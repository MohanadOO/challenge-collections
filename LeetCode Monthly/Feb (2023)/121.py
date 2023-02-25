# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description

from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minimum = float('inf')
        profit = 0

        for price in prices:
            if price > minimum:
                profit = max(profit, price - minimum)
            minimum = min(minimum, price)

        return profit
   
print(Solution().maxProfit([7,1,5,3,6,4]))