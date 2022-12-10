//https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/?envType=study-plan&id=binary-search-ii

function minimumSize(nums: number[], maxOperations: number): number {
  // return minimumSizeSort(nums, maxOperations)
  return minimumSizeBinarySearch(nums, maxOperations)
}

// Wrong Solution
function minimumSizeSort(nums: number[], maxOperations: number): number {
  nums.sort((a, b) => a - b)
  while (maxOperations !== 0) {
    let high = nums[nums.length - 1]
    nums.splice(nums.length - 1, 1, ...divide(high))
    nums.sort((a, b) => a - b)
    maxOperations--
  }

  function divide(num: number): number[] {
    if ((num / 2) % 1 === 0) return [num / 2, num / 2]
    return [Math.floor(num / 2) - 1, Math.ceil(num / 2) + 1]
  }

  return nums[nums.length - 1]
}

//Solution => https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/1064649/javascript-binary-search-w-explanation/?envType=study-plan&id=binary-search-ii&languageTags=javascript
function minimumSizeBinarySearch(
  nums: number[],
  maxOperations: number
): number {
  let lo = 0
  let hi = Math.max(...nums)

  while (lo < hi) {
    const max = lo + Math.floor((hi - lo) / 2)
    if (isValid(nums, maxOperations, max)) hi = max
    else lo = max + 1
  }

  return lo

  function isValid(
    nums: number[],
    maxOperations: number,
    max: number
  ): boolean {
    let totalOperations = 0

    for (const num of nums) {
      const numberOfOperations = Math.ceil(num / max) - 1
      totalOperations += numberOfOperations
    }

    return totalOperations <= maxOperations
  }
}

// console.log(minimumSize([2, 4, 8, 2], 4))
console.log(minimumSize([9], 2))
