//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
//Medium

function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1]
  const targetIndex = nums.indexOf(target)
  const lastTargetIndex = nums.lastIndexOf(target)
  return [targetIndex, lastTargetIndex]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
