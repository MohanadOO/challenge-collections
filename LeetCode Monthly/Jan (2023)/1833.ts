//https://leetcode.com/problems/maximum-ice-cream-bars/description/

function maxIceCream(costs: number[], coins: number): number[] {
  return [
    maxIceCreamIterative(costs, coins),
    maxIceCreamBinarySearch(costs, coins),
  ]
}

function maxIceCreamIterative(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b)
  let total = 0
  let sum = 0

  for (let i = 0; i < costs.length; i++) {
    sum += costs[i]
    if (sum <= coins) total++
  }

  return total
}

function maxIceCreamBinarySearch(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b)

  let start = 0
  let end = costs.length
  let ans = 0

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)
    const sum = costs.slice(0, mid).reduce((a, b) => a + b, 0)
    if (sum <= coins) {
      start = mid + 1
      ans = mid
    } else end = mid - 1
  }

  return ans
}

console.log(maxIceCream([1, 3, 2, 4, 1], 7))
console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5))
console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20))
