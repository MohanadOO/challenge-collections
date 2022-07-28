//https://leetcode.com/problems/search-insert-position/
//Easy

var searchInsert = function (nums, target) {
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target)
  }

  let output = 0
  for (num of nums) {
    if (target > num) {
      output = nums.indexOf(num) + 1
    }
  }
  return output
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
