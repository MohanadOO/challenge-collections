//https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/?envType=study-plan&id=binary-search-ii

//https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/709215/java-sort-binary-search/?envType=study-plan&id=binary-search-ii
function numSubseq(nums: number[], target: number): number {
  const len = nums.length
  nums.sort((a, b) => a - b)
  const mod = 1e9 + 7
  const dp = new Array(len + 1)
  dp[0] = 1
  for (let i = 1; i <= len; ++i) {
    dp[i] = (dp[i - 1] * 2) % mod
  }

  let total = 0
  for (let i = len - 1; i >= 0; i--) {
    const curr = nums[i]

    const small = target - curr
    if (small >= curr) total = (total + dp[i]) % mod
    else {
      let left = 0
      let right = i
      while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] > small) right = mid
        else left = mid + 1
      }
      if (left > 0) {
        const check = (dp[i] - dp[i - left] + mod) % mod
        total += check
      }
    }
  }

  return total
}

console.log(numSubseq([3, 5, 6, 7], 9))
console.log(numSubseq([3, 3, 6, 8], 10))
console.log(
  numSubseq(
    [
      6, 10, 12, 3, 29, 21, 12, 25, 17, 19, 16, 1, 2, 24, 9, 17, 25, 22, 12, 22,
      26, 24, 24, 11, 3, 7, 24, 5, 15, 30, 23, 5, 20, 10, 19, 20, 9, 27, 11, 4,
      23, 4, 4, 12, 22, 27, 16, 11, 26, 10, 23, 26, 16, 21, 24, 21, 17, 13, 21,
      9, 16, 17, 27,
    ],
    26
  )
)
