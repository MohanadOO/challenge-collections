//https://leetcode.com/problems/subarray-sums-divisible-by-k

function subarraysDivByK(nums: number[], k: number): number {
  //   return subarraysDivByKIterative(nums, k)
  return subarraysDivByKPrefixSum(nums, k)
}

function subarraysDivByKIterative(nums: number[], k: number): number {
  let total = 0
  let left = 0

  while (left < nums.length) {
    let sum = 0
    for (let i = left; i < nums.length; i++) {
      sum += nums[i]
      if (sum / k === Math.floor(sum / k)) total++
    }
    left++
  }

  return total
}

function subarraysDivByKPrefixSum(nums: number[], k: number): number {
  let prefixMod = 0
  let result = 0

  let map = new Array(k).fill(0)
  map[0] = 1

  for (let num of nums) {
    prefixMod = (prefixMod + (num % k) + k) % k
    result += map[prefixMod]
    map[prefixMod]++
  }

  return result
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))
// console.log(subarraysDivByK([5], 9))
