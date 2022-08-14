//https://leetcode.com/problems/repeated-substring-pattern/
//Easy

function repeatedSubstringPattern(s: string): boolean {
  return usingNestedForLoop(s)
  return usingSliceAndRepeat(s)
}

function usingNestedForLoop(s: string): boolean{
    if (s.length <= 1) return false
    for (let i = 0; i < s.length / 2; i++) {
      let count = i + 1
      if (s.length % count != 0) continue

      let num_repeat = s.length / count
      let substring = s.substring(0, count)
      let result: string[] = []

      for (let j = 0; j < num_repeat; j++) {
        result.push(substring)
      }
      if (result.join('') === s) return true
    }
    return false
}

function usingSliceAndRepeat(s: string): boolean {
  let i = 1
  let len = s.length
  while (i <= Math.floor(len / 2)) {
    if (s.slice(0, i).repeat(len / i) === s) return true
    i++
  }

  return false
}


console.log(repeatedSubstringPattern('abab'))
console.log(repeatedSubstringPattern('a'))
console.log(repeatedSubstringPattern('abcabcabcabc'))
console.log(repeatedSubstringPattern('abbabb'))
console.log(repeatedSubstringPattern('babbabbabbabbab'))
