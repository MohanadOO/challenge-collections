//https://leetcode.com/problems/sum-of-square-numbers/?envType=study-plan&id=binary-search-i

function judgeSquareSum(c: number): boolean {
  let s = 0
  let e = Math.ceil(Math.sqrt(c))
  while (s <= e) {
    if (s * s + e * e === c) return true
    if (s * s + e * e < c) s++
    if (s * s + e * e > c) e--
  }

  return false
}

console.log(judgeSquareSum(4))
console.log(judgeSquareSum(5))
console.log(judgeSquareSum(3))
console.log(judgeSquareSum(2))
