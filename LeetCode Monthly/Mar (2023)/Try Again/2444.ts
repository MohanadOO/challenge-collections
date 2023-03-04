//https://leetcode.com/problems/count-subarrays-with-fixed-bounds

function countSubarrays(nums: number[], minK: number, maxK: number): number {
  // Out of Memory
  //   return countSubarraysNaive(nums, minK, maxK)

  return countSubarraysSliding(nums, minK, maxK)
}

function countSubarraysNaive(
  nums: number[],
  minK: number,
  maxK: number
): number {
  let tempArr: number[] = []
  const res: number[][] = []

  let count = 0

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    if (curr >= minK && curr <= maxK) tempArr.push(curr)
    else if (curr < minK || curr > maxK) tempArr = []
    if (tempArr.includes(minK) && tempArr.includes(maxK)) res.push([...tempArr])
  }

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      const test = res[i].slice(j)
      if (test.includes(minK) && test.includes(maxK)) count++
    }
  }

  return count
}

function countSubarraysSliding(
  nums: number[],
  minK: number,
  maxK: number
): number {
  let res = 0
  let start = 0
  let currMin = -1
  let currMax = -1
  let foundMin = false
  let foundMax = false

  for (let right = 0; right < nums.length; right++) {
    const curr = nums[right]

    if (curr === minK) {
      foundMin = true
      currMin = right
    }
    if (curr === maxK) {
      foundMax = true
      currMax = right
    }

    if (curr < minK || curr > maxK) {
      foundMin = false
      foundMax = false
      start = right + 1
    }

    if (foundMin && foundMax) {
      res += Math.min(currMin, currMax) - start + 1
    }
  }

  return res
}

console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5))
// console.log(countSubarrays([1, 1, 1, 1], 1, 1))
