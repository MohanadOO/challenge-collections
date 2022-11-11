//https://leetcode.com/problems/smallest-range-ii/?envType=study-plan&id=programming-skills-ii
//Medium

//Result Explanation https://leetcode.com/problems/smallest-range-ii/solutions/989816/explanation-with-pictures-you-can-understand-newmax-vs-newmin-instead-of-i-vs-i-1/?envType=study-plan&id=programming-skills-ii
function smallestRangeII(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)

  const len = nums.length - 1
  let min = nums[0] - k
  let max = nums[len] - k

  let result = max - min

  if (k === 0) return result

  for (let i = 0; i < len; i++) {
    min = Math.min(nums[i + 1] - k, nums[0] + k)
    max = Math.max(nums[i] + k, max)
    result = Math.min(result, max - min)
  }

  return result
}

console.log(smallestRangeII([0, 10], 2))
console.log(smallestRangeII([1, 3, 6], 3))
