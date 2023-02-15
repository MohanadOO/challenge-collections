from typing import List

class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        # Using Map to Join List
        # a = ''.join(map(str, num))

        # Using For in to Join List
        a = int(''.join(str(n) for n in num))
        total = a + k

        split = list(str(total))
        splitInt = ([int(s) for s in split])
        return splitInt

 

print(Solution().addToArrayForm([1,2,3,4], 34))