//https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/?envType=study-plan&id=binary-search-i

//Solution => https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/2848167/cpp-easy-to-understand-simple-and-clean-code/?envType=study-plan&id=binary-search-i
function specialArray(nums: number[]): number {
  let count = 0
  let ans = -1
  let x = 1

  const len = nums.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (nums[j] >= x) count++
    }
    if (count === x) {
      ans = x
      break
    }
    count = 0
    x++
  }

  return ans
}

console.log(specialArray([3, 5]))
console.log(specialArray([0, 0]))
console.log(specialArray([0, 4, 3, 0, 4]))
