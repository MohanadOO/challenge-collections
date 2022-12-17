//https://leetcode.com/problems/frequency-of-the-most-frequent-element/?envType=study-plan&id=binary-search-ii

function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  let sum = 0
  let start = 0
  let maxFreq = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    while (nums[i] * (i - start + 1) - sum > k) {
      sum -= nums[start]
      start++
    }
    maxFreq = Math.max(maxFreq, i - start + 1)
  }

  return maxFreq
}

console.log(maxFrequency([1, 2, 3, 4, 5, 6], 5))
console.log(maxFrequency([3, 9, 6], 2))
