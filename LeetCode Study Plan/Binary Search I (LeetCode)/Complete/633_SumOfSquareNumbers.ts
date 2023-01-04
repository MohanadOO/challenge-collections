//https://leetcode.com/problems/sum-of-square-numbers/?envType=study-plan&id=binary-search-i

function judgeSquareSum(c: number): boolean[] {
  return [judgeSquareSum1(c), judgeSquareSum2(c)]
}

function judgeSquareSum1(c: number): boolean {
  let s = 0
  let e = Math.ceil(Math.sqrt(c))
  while (s <= e) {
    if (s * s + e * e === c) return true
    if (s * s + e * e < c) s++
    if (s * s + e * e > c) e--
  }

  return false
}

function judgeSquareSum2(c: number): boolean {
  let start = 0
  let end = Math.ceil(Math.sqrt(c))

  while (start <= end) {
    const startMul = start * start
    const endMul = end * end
    const sum = startMul + endMul

    if (sum === c) return true
    else if (sum > c) end--
    else start++
  }

  return false
}

console.log(judgeSquareSum(4))
console.log(judgeSquareSum(5))
console.log(judgeSquareSum(3))
console.log(judgeSquareSum(2))
