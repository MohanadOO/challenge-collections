//https://leetcode.com/problems/minimum-size-subarray-sum/?envType=study-plan&id=binary-search-ii

function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0
  let right = 0
  let total = 0
  let result = Infinity

  while (right < nums.length) {
    total += nums[right]

    while (total >= target) {
      result = Math.min(right - left + 1, result)
      total -= nums[left++]
    }

    right++
  }

  if (result === Infinity) return 0
  return result
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
