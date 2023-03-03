# https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return haystack.find(needle)
    
    def strStrRabinKarp(self, haystack: str, needle: str) -> int:
        n = len(needle)
        h = len(haystack)

        hash_n = hash(needle)

        for i in range(h - n + 1):
            if hash(haystack[i: i + n]) == hash_n:
                return i
        return -1




print(Solution().strStrRabinKarp('letcoleede', 'lee'))