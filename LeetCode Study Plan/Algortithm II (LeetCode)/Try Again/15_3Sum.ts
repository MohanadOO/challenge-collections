//https://leetcode.com/problems/3sum/
//Medium

//Solution https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments!
function threeSum(nums: number[]): number[][] {
  const results: number[][] = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i
    let middle = i + 1
    let right = nums.length - 1

    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue

    while (middle < right) {
      let sum = nums[left] + nums[middle] + nums[right]

      if (sum === 0) {
        results.push([nums[left], nums[middle], nums[right]])

        while (nums[middle] === nums[middle + 1]) middle++
        while (nums[right] === nums[right + 1]) right--

        middle++
        right--
      } else if (sum < 0) {
        middle++
      } else {
        right--
      }
    }
  }
  return results
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
