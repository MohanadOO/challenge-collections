//https://leetcode.com/problems/rotate-array/
//Medium

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// var rotate = function (nums, k) {
//   const startRotate = nums.slice(0, k)
//   const endRotate = nums.slice(k, nums.length)
//   return endRotate.concat(startRotate)
// }
// var rotate = function (nums, k) {
//   const startRotate = nums.slice(0, k)
//   return [...nums.splice(k), ...startRotate]
// }

// var rotate = function (nums, k) {
//   const startRotate = []
//   const endRotate = []
//   for (let i = 0; i < k + 1; i++) {
//     startRotate.push(nums[i])
//     endRotate.push(nums.length + 1 + i)
//   }
//   return [...startRotate, ...endRotate]
// }

//This is the only Solution that works
var rotate = function (nums, k) {
  n = nums.length
  k = k % n
  nums.push(...[...nums.slice(0, n - k)])
  nums.splice(0, n - k)
}

console.log(rotate([-1, -100, 3, 99], 2))
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
