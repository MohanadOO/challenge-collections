//https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/?envType=study-plan&id=binary-search-ii

function smallestDivisor(nums: number[], threshold: number): number {
  nums.sort((a, b) => a - b)
  let s = 1
  let e = nums[nums.length - 1]
  let ans = -1

  while (s <= e) {
    const mid = Math.floor((s + e) / 2)
    const sum = nums.reduce((a, b) => a + Math.ceil(b / mid), 0)

    if (sum <= threshold) {
      e = mid - 1
      ans = mid
    } else s = mid + 1
  }

  return ans
}

console.log(smallestDivisor([1, 2, 5, 9], 6))
console.log(smallestDivisor([44, 22, 33, 11, 1], 5))
console.log(smallestDivisor([21212, 10101, 12121], 1000000))
console.log(smallestDivisor([2, 3, 5, 7, 11], 11))
console.log(smallestDivisor([19], 5))
