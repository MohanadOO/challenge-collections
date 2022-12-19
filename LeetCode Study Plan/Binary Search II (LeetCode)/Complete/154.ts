//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/?envType=study-plan&id=binary-search-ii

function findMin(nums: number[]): number {
  let start = 0
  let end = nums.length - 1

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2)

    if (nums[mid] < nums[end]) end = mid
    else if (nums[mid] > nums[end]) start = mid + 1
    else end -= 1
  }

  return nums[start]
}

console.log(findMin([1, 3, 5]))
console.log(findMin([2, 2, 2, 0, 1]))
console.log(findMin([5, 1, 1, 3, 4]))
