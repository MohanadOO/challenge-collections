//https://leetcode.com/problems/increasing-triplet-subsequence/

/*
    - The return value can be true if and only nums[i] < nums[j] < nums[k] where i < j < k
    - If no such indices exist return false  

    Solution Secret 👇
    - Keep track of minimum value (first, i) in the array and we keep storing the current value to the second (j) until we find a value that is bigger then the current 
*/

function increasingTriplet(nums: number[]): boolean {
  const len = nums.length

  let first = Infinity
  let second = Infinity

  for (let i = 0; i < len; i++) {
    const current = nums[i]

    if (current > first && current > second) return true

    if (current > first) second = current 
    else first = current
  }

  return false
}

console.log(increasingTriplet([1, 2, 3, 4, 5]))
console.log(increasingTriplet([5, 4, 3, 2, 1]))
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]))
console.log(increasingTriplet([1, 5, 0, 4, 1, 3]))
