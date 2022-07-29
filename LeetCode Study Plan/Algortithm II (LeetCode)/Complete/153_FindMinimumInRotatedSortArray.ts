//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
//Medium

//Easy Solution
// function findMin(nums: number[]): number {
//   return Math.min(...nums)
// }

//Better Performance
// function findMin(nums: number[]): number {
//   return nums.sort((a,b) => a -b)[0]
// }

function findMin(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }

  let first = 0
  let last = nums.length - 1

  if (nums[last] >= nums[first]) {
    return nums[0]
  }

  while (last >= first) {
    const middle = first + (last - first)
    if (nums[middle] > nums[middle + 1]) {
      return nums[middle + 1]
    }

    if (nums[middle - 1] > nums[middle]) {
      return nums[middle]
    }

    if (nums[middle] > nums[0]) {
      first = middle + 1
    } else {
      last = middle - 1
    }
  }
  return nums[first]
}

console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([2, 1]))
