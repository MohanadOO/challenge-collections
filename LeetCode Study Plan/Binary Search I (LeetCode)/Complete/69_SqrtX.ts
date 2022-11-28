//https://leetcode.com/problems/sqrtx/?envType=study-plan&id=binary-search-i

function mySqrt(x: number): number {
  let n = 2
  let total = 2

  if (x === 0) return 0
  if (x === 1) return 1

  while (total <= x) {
    total = n * n
    if (total === x) return n
    n++
  }
  return n - 2
}
