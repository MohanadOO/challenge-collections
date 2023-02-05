//https://leetcode.com/problems/find-all-anagrams-in-a-string/

function findAnagrams(s: string, p: string): number[] {
  const anagrams: number[] = []
  const neededChars = {}

  for (let char of p) {
    if (neededChars[char] >= 1) neededChars[char]++
    else neededChars[char] = 1
  }

  let left = 0
  let right = 0
  let count = p.length

  while (right < s.length) {
    if (neededChars[s[right]] >= 1) count--

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
