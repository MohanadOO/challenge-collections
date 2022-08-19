//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//Medium

function lengthOfLongestSubstring(s: string): number {
  let storeLetters: string[] = []
  let count = 0
  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    storeLetters.push(current)
    for (let j = i + 1; j < s.length; j++) {
      if (storeLetters.includes(s[j])) break
      storeLetters.push(s[j])
    }

    if (storeLetters.length > count) {
      count = storeLetters.length
    }
    storeLetters = []
  }

  return count
}

//https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/731639/JavaScript-Clean-Heavily-Commented-Solution
function lengthOfLongestSubstring1(s: string): number {
  const seen = new Map()
  let start = 0
  let maxLen = 0

  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) {
      start = Math.max(seen.get(s[i]) + 1, start)
    }
    seen.set(s[i], i)
    maxLen = Math.max(i - start + 1, maxLen)
  }

  return maxLen
}

console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring('dvdf'))
// console.log(lengthOfLongestSubstring('aabaab!bb'))
// console.log(lengthOfLongestSubstring('aab'))
// console.log(lengthOfLongestSubstring('bbb'))
