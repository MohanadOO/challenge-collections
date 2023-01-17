//https://leetcode.com/problems/flip-string-to-monotone-increasing

function minFlipsMonoIncr(s: string): number {
  let min = 0
  let num = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') min = Math.min(num, min + 1)
    else num++
  }

  return min
}

console.log(minFlipsMonoIncr('00110'))
console.log(minFlipsMonoIncr('010110'))
console.log(minFlipsMonoIncr('00011000'))
