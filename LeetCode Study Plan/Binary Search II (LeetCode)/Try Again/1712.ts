//https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/?envType=study-plan&id=binary-search-ii

//Solution => https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/1000615/javascript-go-3-pointers-time-o-n-space-o-1/
function waysToSplit(nums: number[]): number {
  const mod = 1000000007
  const len = nums.length
  const lastIndex = nums.length - 2
  const total = nums.reduce((a, b) => a + b)

  let midLeftPtr = -1
  let midRightPtr = -1

  let leftSum = 0
  let midSum = 0
  let rightSum = 0

  let splitWays = 0

  for (let leftPtr = 0; leftPtr < len; leftPtr++) {
    leftSum += nums[leftPtr]
    midSum -= nums[leftPtr]
    rightSum -= nums[leftPtr]

    while (
      midLeftPtr <= lastIndex &&
      (midLeftPtr <= leftPtr || midSum < leftSum)
    ) {
      midLeftPtr++
      midSum += nums[midLeftPtr]
    }

    while (
      midRightPtr <= lastIndex &&
      (midLeftPtr > midRightPtr || rightSum <= total - rightSum - leftSum)
    ) {
      midRightPtr++
      rightSum += nums[midRightPtr]
    }

    splitWays = (splitWays + midRightPtr - midLeftPtr) % mod
  }

  return splitWays % mod
}

console.log(waysToSplit([1, 2, 2, 2, 5, 0]))
// console.log(waysToSplit([1,1,1]))
// console.log(waysToSplit([3, 2, 1]))
