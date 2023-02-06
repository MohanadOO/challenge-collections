//https://leetcode.com/problems/shuffle-the-array/

function shuffle(nums: number[], n: number): number[] {
  const result: number[] = []

  const len = nums.length / 2
  for (let i = 0; i < len; i++) {
    result.push(nums[i], nums[i + n])
  }

  return result
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3))
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4))
console.log(shuffle([1, 1, 2, 2], 2))
