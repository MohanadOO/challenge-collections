//https://leetcode.com/problems/search-in-rotated-sorted-array/
//Medium

function search(nums: number[], target: number): number {
  return nums.indexOf(target)
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))
console.log(search([1], 0))
