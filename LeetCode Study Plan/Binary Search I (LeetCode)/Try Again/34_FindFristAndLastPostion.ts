//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/?envType=study-plan&id=binary-search-i

function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1]

  let s = 0
  let e = nums.length - 1

  let result = [-1, -1]

  let findStart = false
  let findEnd = false

  while (!findStart && !findEnd) {
    const mid = s + Math.floor((e - s) / 2)

    const curr = nums[mid]
    const prev = nums[mid - 1]
    const next = nums[mid + 1]

    console.log(curr)
    console.log(prev)
    console.log(next)
    console.log(s, e)

    if (curr === target && (prev === undefined || prev !== target)) {
      result[0] = s
      findStart = true
    }
    if (curr === target && (next === undefined || next !== target)) {
      result[1] = e
      findEnd = true
    }

    if (curr < target && !findStart) s = mid + 1
    else if (curr > target && !findEnd) e = mid - 1
  }

  return result
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
// console.log(searchRange([2, 2], 2))
