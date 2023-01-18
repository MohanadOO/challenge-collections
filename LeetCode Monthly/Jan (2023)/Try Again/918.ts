//https://leetcode.com/problems/maximum-sum-circular-subarray

function maxSubarraySumCircular(nums: number[]): number {
  //   return maxSubarraySumCircularNestedLoop(nums)
  return maxSubarraySumCircularMinimumSubArray(nums)
}

//Nested Loop Attempt (NOT WORKING)
function maxSubarraySumCircularNestedLoop(nums: number[]): number {
  let sum = 0
  let maxSum = -Infinity
  let n = nums.length

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    sum = curr
    for (let j = i + 1; j < nums.length; j++) {
      let next = nums[(j + i) % n]
      if (next >= curr) {
        sum = sum + next
        curr = next
      } else {
        sum = sum + curr
        break
      }
    }
    maxSum = Math.max(maxSum, sum, curr)
  }

  return maxSum
}

//Solution => https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/2868539/maximum-sum-circular-subarray/?orderBy=most_votes
function maxSubarraySumCircularMinimumSubArray(nums: number[]): number {
  let curMax = 0
  let curMin = 0
  let sum = 0
  let maxSum = nums[0]
  let minSum = nums[0]

  for (const num of nums) {
    curMax = Math.max(curMax, 0) + num
    maxSum = Math.max(maxSum, curMax)
    curMin = Math.min(curMin, 0) + num
    minSum = Math.min(minSum, curMin)
    sum += num
  }
  return sum == minSum ? maxSum : Math.max(maxSum, sum - minSum)
}

console.log(maxSubarraySumCircular([1, -2, 3, -2]))
console.log(maxSubarraySumCircular([5, -3, 5]))
console.log(maxSubarraySumCircular([-3, -2, -3]))
console.log(maxSubarraySumCircular([-3, -2, -1, 0, 1, 2, 5]))
console.log(maxSubarraySumCircular([3, -1, 2, -1]))
console.log(maxSubarraySumCircular([1]))
