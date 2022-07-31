//https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
//Easy

function areAlmostEqual(s1: string, s2: string): boolean {
  let diff = 0
  let diff1 = 0
  let diff2 = 0

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue
    if (++diff > 2) return false

    if (diff === 1) {
      diff1 = i
    } else {
      diff2 = i
    }
  }

  return (
    (diff === 0 || diff === 2) &&
    s1[diff1] === s2[diff2] &&
    s1[diff2] === s2[diff1]
  )
}

console.log(areAlmostEqual('bank', 'kanb'))
// console.log(areAlmostEqual('aa', 'ac'))
// console.log(areAlmostEqual('attack', 'defend'))
// console.log(areAlmostEqual('yhy', 'hyc'))
// console.log(areAlmostEqual("siyolsdcjthwsiplccjbuceoxmpjgrauocx"
// "siyolsdcjthwsiplccpbuceoxmjjgrauocx"))
