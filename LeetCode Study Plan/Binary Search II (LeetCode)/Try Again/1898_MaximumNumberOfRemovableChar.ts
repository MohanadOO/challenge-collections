//https://leetcode.com/problems/maximum-number-of-removable-characters/?envType=study-plan&id=binary-search-ii

/*
  - Given two strings s and p.
    1. s => Sequence
    2. p => Subsequence of s
  - Given Distinct 0-indexed integer array "removable" containing a subset of indices of s (s also 0-indexed)
  - Choose an integer k (0 <= k <= removable.length). Such that after removing k characters from s using the first k indices in removable, p is still a subsequence of s.
  - Return the MAXIMUM k you can choose that make p still a subsequence of s after the removals.
*/

function maximumRemovalsAttempt(
  s: string,
  p: string,
  removable: number[]
): number {
  let marked: number[] = []
  let k = 0

  for (let i = 0; i < removable.length; i++) {
    marked.push(removable[i])
    if (!isRemovable(s, p, marked)) return k
    k++
  }

  function isRemovable(str: string, p: string, marked: number[]): boolean {
    marked.sort((a, b) => b - a)
    let subStr = str
    for (let c = 0; c < marked.length; c++) {
      let start = s.slice(0, marked[c])
      let end = subStr.slice(marked[c] + 1)
      subStr = start + end
    }

    let index: number | undefined
    for (let i = 0; i < p.length; i++) {
      if (subStr.includes(p[i])) {
        if (index === undefined) index = subStr.indexOf(p[i])
        else if (subStr.indexOf(p[i]) < index) return false
      } else return false
    }

    return true
  }

  return k
}

// Solution => https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/1268714/javascript-binary-search/
function maximumRemovals(s: string, p: string, removable: number[]): number {
  let left = 0
  let right = removable.length

  while (left < right) {
    const mid = left + Math.floor((right - left + 1) / 2)
    const arr = [...s]

    for (let i = 0; i < mid; i++) {
      arr[removable[i]] = '#'
    }

    const temp = arr.filter((el) => el !== '#').join('')
    if (!isSubSeq(temp, p)) right = mid - 1
    else left = mid
  }

  function isSubSeq(s: string, p: string): boolean {
    let pre = -1

    for (let i = 0; i < p.length; i++) {
      const curr = s.indexOf(p[i], pre + 1)
      if (curr < 0 || curr <= pre) return false
      pre = curr
    }
    return true
  }

  return left
}

console.log(maximumRemovals('abcacb', 'ab', [3, 1, 0]))
console.log(maximumRemovals('abcbddddd', 'abcd', [3, 2, 1, 4, 5, 6]))
console.log(maximumRemovals('abcab', 'abc', [0, 1, 2, 3, 4]))
