//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/?envType=study-plan&id=binary-search-i

function findMin(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  let s = 0
  let e = nums.length - 1

  if (nums[s] <= nums[e]) return nums[0]

  while (s <= e) {
    const middle = s + (e - s)
    if (nums[middle] > nums[middle + 1]) return nums[middle + 1]

    if (nums[middle - 1] > nums[middle]) return nums[middle]

    if (nums[middle] > nums[0]) s = middle + 1
    else e = middle - 1
  }
}
