# https://leetcode.com/problems/koko-eating-bananas/description/

from types import List
import math

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def maxSpeedPerHour(speed: int) -> bool:
            return sum(math.ceil(pile / speed) for pile in piles) <= h
        
        s = 1
        e = max(piles)

        while s < e:
            mid = s + (e - s) // 2
            if maxSpeedPerHour(mid): e = mid
            else: s = mid + 1

        return s