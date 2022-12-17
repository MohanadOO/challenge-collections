//https://leetcode.com/problems/single-element-in-a-sorted-array/?envType=study-plan&id=binary-search-ii

function singleNonDuplicate(nums: number[]): number {
  let len = nums.length

  let start = 0
  let end = len - 1

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2)
    mid -= mid % 2
    console.log(mid)
    if (nums[mid - 2] === nums[mid - 1]) start = mid
    else end = mid

    if (end - start < 3) {
      let last = end - (end % 2)
      return nums[last - 2] === nums[last - 1] ? nums[last] : nums[last - 2]
    }
  }

  return -1
}

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
console.log(singleNonDuplicate([1, 3, 7, 7, 10, 11, 11]))
