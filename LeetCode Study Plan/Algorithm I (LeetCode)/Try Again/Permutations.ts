//https://leetcode.com/problems/permutations/
//Medium

//Solution: https://leetcode.com/problems/permutations/discuss/18308/JavaScript-using-DP
let permute = function (nums: number[]): number[][] {
  const result = []
  backtrack(nums, result)
  return result
}

function backtrack(nums, result, n = 0) {
  if (n === nums.length - 1) return result.push(nums.slice(0))

  for (let i = n; i < nums.length; i++) {
    ;[nums[i], nums[n]] = [nums[n], nums[i]]
    backtrack(nums, result, n + 1)
    ;[nums[i], nums[n]] = [nums[n], nums[i]]
  }
}

//[1,2,3] , [2,1,3], [3,2,1]
// Length of 3 will result 3 * 2 * 1 => 6
console.log(permute([1, 2, 3]))

// Length of 2 will result 2 * 1 => 2
// console.log(permute([0, 1]))
