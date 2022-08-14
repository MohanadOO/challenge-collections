//https://leetcode.com/problems/binary-search/
//Easy

var search = function (nums, target) {
  for (num of nums) {
    if (num === target) return nums.indexOf(num)
  }
  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 2))
