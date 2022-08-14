//https://leetcode.com/problems/monotonic-array/
//Easy

function isMonotonic(nums: number[]): boolean {
  let increasing = true
  let decreasing = true

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) increasing = false
    if (nums[i] < nums[i + 1]) decreasing = false
  }
  return increasing || decreasing
}

console.log(isMonotonic([1, 2, 2, 3]))
console.log(isMonotonic([6, 5, 4, 4]))
console.log(isMonotonic([1, 3, 2]))
