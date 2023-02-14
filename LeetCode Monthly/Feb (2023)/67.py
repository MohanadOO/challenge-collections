# https://leetcode.com/problems/add-binary

class Solution:
    def addBinaryOneLine(self, a: str, b: str) -> str:
       return bin(int(a, 2) + int(b, 2)).replace('0b', '')
    
    def addBinary(self, a: str, b: str) -> str:
       res = []
       carry = 0
       i, j = len(a) - 1, len(b) - 1

       while i >= 0 or j >= 0 or carry:
           d1 = int(a[i]) if i >= 0 else 0
           d2 = int(b[j]) if j >= 0 else 0

           sum = d1 + d2 + carry
           carry = sum // 2
           rem = sum % 2
           i -= 1
           j -= 1
           res.append(str(rem))

       return ''.join(res[::-1])
          

print(Solution().addBinary('1', '11'))