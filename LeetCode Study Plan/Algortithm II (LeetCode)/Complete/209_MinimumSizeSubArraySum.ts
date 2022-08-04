//https://leetcode.com/problems/minimum-size-subarray-sum/
//Medium

function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0,
    right = 0,
    total = 0,
    result = Infinity

  while (right < nums.length) {
    total = total + nums[right]

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
