//https://leetcode.com/problems/search-in-rotated-sorted-array-ii/?envType=study-plan&id=binary-search-ii

//https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/849038/search-in-rotated-sorted-array-ii/?envType=study-plan&id=binary-search-ii
function search(nums: number[], target: number): boolean {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)
    if (nums[mid] === target) return true

    // Is Binary Search Helpful
    if (!(nums[start] !== nums[mid])) {
      start++
      continue
    }

    const pivotArr = nums[start] <= nums[mid]
    const targetArray = nums[start] <= target

    if ((pivotArr && !targetArray) || (!pivotArr && targetArray)) {
      if (pivotArr) start = mid + 1
      else end = mid - 1
    } else {
      if (nums[mid] < target) start = mid + 1
      else end = mid - 1
    }
  }

  return false
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 0))
console.log(search([1, 3], 1))
console.log(search([2, 5, 6, 0, 0, 1, 2], 3))
console.log(search([1, 2, 2, 5, 6, 0, 0], 3))
console.log(search([1, 0, 1, 1, 1], 0))
console.log(
  search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)
)
