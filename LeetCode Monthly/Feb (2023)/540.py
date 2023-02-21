# https://leetcode.com/problems/single-element-in-a-sorted-array/?envType=study-plan&id=binary-search-ii

from typing import List

# The idea for the solution is to find when the pattern is broken and this happen when we know that:
#   - Middle Position is even => Current Number == Next Number else the pattern is broken.
#   - Middle Position is odd  => Current Number == Previous Number else the pattern is broken.
# Since we start the list from 0 which is an even number the next should be the same that's and when this pattern break we will know 
# and figure out where the non duplicate number is.

class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:

        left = 0
        right = len(nums) - 1

        while left < right:
            mid = left + ((right - left) // 2)

            # If the mid is at even position then the curr number and next one should be the sameand the duplicate number must be after mid.
            if (mid % 2 == 0 and nums[mid] == nums[mid + 1]):
                left = mid + 1
            # else if the mid is odd then the curr number and previous one should be the same and the duplicate number must be after mid.
            elif mid % 2 == 1 and nums[mid -1] == nums[mid]:
                left = mid + 1
            # else the pattern is broken and the non duplicate number must be before mid.
            else: 
                right = mid

        return nums[left]

    


print(Solution().singleNonDuplicate([1,1,2,3,3,4,4,8,8]))