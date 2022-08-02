//https://leetcode.com/problems/move-zeroes/
//Easy

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let countZero = 0
  nums.forEach((num, index) => {
    const currentIndex = index - countZero
    const value = nums[currentIndex]
    if (value === 0) {
      nums.splice(currentIndex, 1)
      nums.push(0)
      countZero++
    }
  })
  console.log(nums)
}

// console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0, 0, 1]))
