//https://leetcode.com/problems/palindrome-partitioning/

function partition(s: string): string[][] {
  function backtrack(start: number, path: string[], res: string[][]) {
    if (start === s.length) {
      res.push(path)
      return
    }

    for (let i = start; i < s.length; i++) {
      const subStr = s.substring(start, i + 1)
      if (isPalindrome(subStr)) {
        backtrack(i + 1, [...path, subStr], res)
      }
    }
  }

  function isPalindrome(str: string): boolean {
    console.log(str)
    return str === str.split('').reverse().join('')
  }

  const res: string[][] = []
  backtrack(0, [], res)
  return res
}

console.log(partition('aab'))
