//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description

function strStr(haystack: string, needle: string): number {
  const hLen = haystack.length
  const nLen = needle.length
  if (nLen > hLen) return -1
  if (nLen === hLen) return haystack === needle ? 0 : -1

  for (let i = 0; i <= hLen - nLen; i++) {
    if (haystack[i] === needle[0]) {
      if (search(haystack, i, nLen)) return i
    }
  }

  function search(
    haystack: string,
    start: number,
    needleLenght: number
  ): boolean {
    for (let i = 0; i < needleLenght; i++) {
      if (haystack[i + start] !== needle[i]) return false
    }
    return true
  }

  return -1
}

console.log(strStr('dadbutsad', 'sad'))
console.log(strStr('leetcode', 'leeto'))
