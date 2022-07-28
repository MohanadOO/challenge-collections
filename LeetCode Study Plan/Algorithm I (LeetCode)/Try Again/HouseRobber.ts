//https://leetcode.com/problems/house-robber/
//Medium

function rob(nums: number[]): number {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  let dp = [nums[0], Math.max(nums[0], nums[1])]
  let totalMoney = Math.max(dp[0], dp[1])

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    totalMoney = dp[i]
  }

  return totalMoney
}

console.log(rob([1, 1]))
console.log(rob([1, 2, 3, 1]))
