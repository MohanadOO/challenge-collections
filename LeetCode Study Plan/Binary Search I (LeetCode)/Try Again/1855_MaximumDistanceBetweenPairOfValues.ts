//https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/?envType=study-plan&id=binary-search-i

//Solution => https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/2763147/maximum-distance-between-a-pair-of-values/?envType=study-plan&id=binary-search-i
function maxDistance(nums1: number[], nums2: number[]): number {
  let max = 0
  let p1 = 0
  let p2 = 0

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] > nums2[p2]) p1++
    else {
      max = Math.max(max, p2 - p1)
      p2++
    }
  }

  return max
}

console.log(maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5]))
