//https://leetcode.com/problems/jump-game-ii

// Return the minimum number of jumps to reach nums[nums.length - 1]

function jump(nums: number[]): number {
    return Recursive(nums)
//   return Greedy(nums)
}

// FIXME: TLE (Adding Memorization might help)
function Recursive(nums: number[]): number {
  let min = Infinity

  function backtrack(pos: number, currMin: number, index: number) {
    if (currMin > min) return
    if (index === nums.length - 1) {
      min = Math.min(min, currMin)
      return
    }
    if (pos === 0 || pos === undefined) return
    for (let i = 0; i < pos; i++) {
      backtrack(nums[index + i + 1], currMin + 1, index + i + 1)
    }
  }

  backtrack(nums[0], 0, 0)
  return min
}

// Solution => https://leetcode.com/problems/jump-game-ii/solutions/3076867/jump-game-ii/
function Greedy(nums: number[]): number {
  let answer = 0

  let curEnd = 0
  let curFar = 0

  for (let i = 0; i < nums.length - 1; i++) {
    curFar = Math.max(curFar, i + nums[i])
    if (i === curEnd) {
      answer++
      curEnd = curFar
    }
  }

  return answer
}

console.log(
  jump([
    5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9,
    6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5,
  ])
)
console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([2, 3, 0, 1, 4]))
