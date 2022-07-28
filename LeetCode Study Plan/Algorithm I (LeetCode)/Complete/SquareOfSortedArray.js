//https://leetcode.com/problems/squares-of-a-sorted-array/
//Easy

var sortedSquares = function (nums) {
  return nums
    .map((num) => {
      return num * num
    })
    .sort((a, b) => {
      return a - b
    })
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))
