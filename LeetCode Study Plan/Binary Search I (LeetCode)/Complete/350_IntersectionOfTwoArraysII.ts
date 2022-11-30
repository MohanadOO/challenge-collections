//https://leetcode.com/problems/intersection-of-two-arrays-ii/?envType=study-plan&id=binary-search-i

function intersect(nums1: number[], nums2: number[]): number[] {
  const intersect: number[] = []
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      intersect.push(nums1[i])
      const index = nums2.indexOf(nums1[i])
      delete nums2[index]
    }
  }
  return intersect
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
