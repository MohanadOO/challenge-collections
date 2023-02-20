# https://leetcode.com/problems/search-insert-position/

from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:

        start = 0
        end = len(nums)

        while(start < end):
            middle = start + ((end - start) // 2)

            if nums[middle] == target: 
                return middle

            if nums[middle] > target: 
                end = middle
            else:
                start = middle + 1 

        return start
    

print(Solution().searchInsert([1,3], 2))