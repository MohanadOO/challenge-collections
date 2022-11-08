//https://leetcode.com/problems/make-the-string-great/
//Easy

function makeGood(s: string): string {
  const sArr = s.split('')
  const len = sArr.length - 1
  for (let i = 0; i < len; i++) {
    const current = s[i]
    const next = s[i + 1]
    if (current === next) continue
    if (current.toUpperCase() === next || next.toUpperCase() === current) {
      sArr.splice(i, 2)
      return makeGood(sArr.join(''))
    }
  }
  return s
}

console.log(makeGood('leEeetcode'))
console.log(makeGood('abBAcC'))
console.log(makeGood('s'))
console.log(makeGood('Pp'))
console.log(makeGood('kkdsFuqUfSDKK'))
