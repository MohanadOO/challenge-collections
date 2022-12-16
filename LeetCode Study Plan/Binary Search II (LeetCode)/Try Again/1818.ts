//https://leetcode.com/problems/minimum-absolute-sum-difference/?envType=study-plan&id=binary-search-ii

//Solution => https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1542158/javascript-solution-sorting-and-binary-search/?envType=study-plan&id=binary-search-ii&languageTags=javascript
function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {
  const MOD = 1e9 + 7

  const origDiffs: number[] = []
  let diffSum = 0

  for (let i = 0; i < nums1.length; i++) {
    const diff = Math.abs(nums1[i] - nums2[i])

    origDiffs[i] = diff
    diffSum += diff
  }

  nums1.sort((a, b) => a - b)

  let minSum = diffSum

  for (let i = 0; i < nums1.length; i++) {
    const origDiff = origDiffs[i]

    let left = 0
    let right = nums1.length

    let bestDiff = origDiff

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)

      const candDiff = nums1[mid] - nums2[i]
      const absCandDiff = Math.abs(nums1[mid] - nums2[i])

      if (absCandDiff < bestDiff) {
        bestDiff = absCandDiff
        if (bestDiff === 0) break
      }

      if (candDiff < 0) left = mid + 1
      else right = mid - 1
    }

    const replacedDiffSum = diffSum - origDiff + bestDiff
    minSum = Math.min(minSum, replacedDiffSum)
  }

  return minSum % MOD
}

console.log(minAbsoluteSumDiff([1, 7, 5], [2, 3, 5]))
