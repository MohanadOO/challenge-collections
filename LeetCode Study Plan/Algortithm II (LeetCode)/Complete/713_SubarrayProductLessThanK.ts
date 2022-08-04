//https://leetcode.com/problems/subarray-product-less-than-k/
//Medium

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  return slidingWindow(nums, k)
}


//Sliding Window Approach
function slidingWindow(nums: number[], k: number): number {
  if (k <= 1) return 0

  let prod = 1,
    ans = 0,
    left = 0

  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right]
    while (prod >= k) prod /= nums[left++]
    ans += right - left + 1
  }
  return ans
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))
console.log(numSubarrayProductLessThanK([10, 2, 2, 5, 4, 4, 4, 3, 7, 7], 289))
console.log(
  numSubarrayProductLessThanK(
    [2, 1, 4, 9, 6, 5, 10, 5, 6, 1, 7, 10, 2, 3, 10],
    423
  )
)
console.log(numSubarrayProductLessThanK([1, 2, 3], 0))
