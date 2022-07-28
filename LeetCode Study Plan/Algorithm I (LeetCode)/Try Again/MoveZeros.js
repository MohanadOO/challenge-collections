//https://leetcode.com/problems/move-zeroes/
//Easy

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let noOfZeros = 0
  for (let i = 0; i < nums.length; i++) {
    const currentIndex = i - noOfZeros
    const value = nums[currentIndex]
    if (value === 0) {
      nums.splice(currentIndex, 1)
      nums.push(value)
      noOfZeros++
    }
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
