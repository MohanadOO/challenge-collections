//https://leetcode.com/problems/valid-perfect-square/?envType=study-plan&id=binary-search-i

function isPerfectSquare(num: number): boolean {
  let total = 1
  let n = 1

  if (num === 0 || num === 1) return true
  while (total <= num) {
    total = n * n
    if (total === num) return true
    n++
  }
  return false
}

console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
console.log(isPerfectSquare(9))
console.log(isPerfectSquare(5))
