//https://leetcode.com/problems/largest-perimeter-triangle/

function largestPerimeter(nums: number[]): number {
  const sort = nums.sort((a, b) => a - b)

  for (let i = nums.length - 3; i >= 0; i--) {
    const a = nums[i]
    const b = nums[i + 1]
    const c = nums[i + 2]
    if (a + b > c) return a + b + c
  }
  return 0
}

console.log(largestPerimeter([2, 1, 2]))
console.log(largestPerimeter([1, 2, 1]))
