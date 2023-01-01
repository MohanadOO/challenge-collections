//https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/?envType=study-plan&id=binary-search-i

function specialArray(nums: number[]): number {
  return specialArrayBinarySearch(nums)
  return specialArrayOld(nums)
}

//Solution => https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/2848167/cpp-easy-to-understand-simple-and-clean-code/?envType=study-plan&id=binary-search-i
function specialArrayOld(nums: number[]): number {
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

//Solution => https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/2521376/js-o-1-space-binary-search-explained/
function specialArrayBinarySearch(nums: number[]): number {
  nums.sort((a, b) => a - b)

  const len = nums.length
  let left = 0
  let right = len - 1

  while (left < right - 1) {
    const mid = left + Math.floor((right - left) / 2)
    let x = len - mid

    if (nums[mid] >= x && x > nums[mid - 1]) return x

    if (nums[mid] < x) left = mid
    else right = mid
  }

  let x = len - left
  return nums[left] >= x ? x : -1
}

console.log(specialArray([3, 5]))
console.log(specialArray([0, 0]))
console.log(specialArray([0, 4, 3, 0, 4]))
