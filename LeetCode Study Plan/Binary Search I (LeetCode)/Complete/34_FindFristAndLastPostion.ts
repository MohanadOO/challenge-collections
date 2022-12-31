//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/?envType=study-plan&id=binary-search-i

function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1]

  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)
    const curr = nums[mid]

    if (curr === target) {
      if (nums[end] === target && nums[start] === target) break
      if (nums[end] !== target) end--
      if (nums[start] !== target) start--
    } else if (curr > target) end = mid - 1
    else start = mid + 1
  }

  if (start > end) return [-1, -1]
  return [start, end]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3))
console.log(searchRange([], 0))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([1, 2, 2], 2))
console.log(searchRange([2, 2], 2))
