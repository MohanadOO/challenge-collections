//https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/?envType=study-plan&id=binary-search-ii

function rangeSum(
  nums: number[],
  n: number,
  left: number,
  right: number
): number {
  const mod = 1e9 + 7

  let start = 0
  let end = 0

  let position = 0
  let sum = 0

  let sumArr = new Array((n * (n + 1)) / 2).fill(-1)

  while (start < nums.length) {
    sum = 0
    for (let i = start + end; i < nums.length; i++) {
      if (position === sumArr.length) break
      sum += nums[i]
      sumArr[position] = sum
      position++
    }

    if (end === nums.length - 1) {
      start = start + 1
      end = 0
    } else end = end + 1
  }

  sumArr.sort((a, b) => a - b)
  const res = sumArr.slice(left - 1, right).reduce((a, b) => a + b)

  return res % mod
}

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5))
console.log(rangeSum([1, 2, 3, 4], 4, 3, 4))
console.log(rangeSum([1, 2, 3, 4], 4, 1, 10))
console.log(rangeSum([7, 5, 8, 5, 6, 4, 3, 3], 8, 2, 6))
