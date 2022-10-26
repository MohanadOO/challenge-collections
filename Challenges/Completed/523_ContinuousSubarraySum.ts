//https://leetcode.com/problems/continuous-subarray-sum/
//Medium

function checkSubarraySum(nums: number[], k: number): boolean {
  //   return checkSubarraySumSlidingWindow(nums, k) // TIMEOUT
  return checkSubarraySumHashMap(nums, k)
}

function checkSubarraySumSlidingWindow(nums: number[], k: number): boolean {
  let left = 0
  let right = 1
  let sum: number = nums[0]

  console.log(1 % 6)

  while (left < nums.length - 1) {
    sum = nums[right] + sum
    if (sum === 0) return true
    if (checkSum(sum)) return true

    if (right === nums.length - 1) {
      left++
      right = left + 1
      sum = nums[left]
    } else {
      right++
    }
  }

  function checkSum(sum: number, i: number = 1): boolean {
    const multiply = i * k
    console.log(multiply)
    if (sum === multiply) return true
    if (sum > multiply) return checkSum(sum, i + 1)
    return false
  }

  return false
}

function checkSubarraySumHashMap(nums: number[], k: number): boolean {
  const hashMap = { 0: -1 } //Map reminder => index
  let total = 0

  for (let i = 0; i < nums.length; i++) {
    total = nums[i] + total
    const reminderIndex: undefined | number = hashMap[total % k]

    if (reminderIndex === undefined) {
      hashMap[total % k] = i
    } else if (i - reminderIndex >= 2) {
      return true
    }
  }
  return false
}

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6))
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13))
console.log(checkSubarraySum([5, 0, 0, 0], 3))
console.log(checkSubarraySum([1, 1000000000], 1))
