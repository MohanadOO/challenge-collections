//https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/?envType=study-plan&id=binary-search-ii

//https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/1119841/javascript-math-binarysearch-with-explanation/
function maxValue(n: number, index: number, maxSum: number): number {
  function getSum(len: number, v: number): number {
    let sum = 0
    if (len <= v) sum = ((2 * v - len + 1) * len) / 2
    else sum = ((1 + v) * v) / 2 + len - v
    return sum
  }

  function isValid(mid: number): boolean {
    let curSum = getSum(leftLen, mid) + getSum(rightLen, mid) - mid
    return curSum <= maxSum
  }

  let left = 0
  let right = 1000000000
  let leftLen = index + 1
  let rightLen = n - index

  while (left < right) {
    const mid = Math.ceil((left + right) / 2)
    if (!isValid(mid)) right = mid - 1
    else left = mid
  }

  return left
}

console.log(maxValue(4, 2, 6))
console.log(maxValue(6, 1, 10))
