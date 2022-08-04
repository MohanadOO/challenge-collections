//https://leetcode.com/problems/find-all-anagrams-in-a-string/
//Medium

//Solution https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/1025753/Simplest-Sliding-Window-Solution-O(N)-Heavily-Commented-JavaScript
function findAnagrams(s: string, p: string): number[] {
  const anagrams: number[] = []
  const neededChars = {}

  for (let char of p) {
    if (char in neededChars) {
      neededChars[char]++
    } else neededChars[char] = 1
  }

  let left = 0
  let right = 0
  let count = p.length

  while (right < s.length) {
    if (neededChars[s[right]] > 0) count--

    neededChars[s[right]]--
    right++

    if (count === 0) anagrams.push(left)

    if (right - left === p.length) {
      if (neededChars[s[left]] >= 0) count++

      neededChars[s[left]]++
      left++
    }
  }
  return anagrams
}

console.log(findAnagrams('cbaebabacd', 'abc'))
// console.log(findAnagrams('abab', 'ab'))
