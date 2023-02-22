//https://leetcode.com/problems/capacity-to-ship-packages-within-d-days

function shipWithinDays(weights: number[], days: number): number {
  let left = Math.max(...weights)
  let right = weights.reduce((a, b) => a + b)

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    let dayCounter = 1
    let totalWeight = 0

    for (let weight of weights) {
      totalWeight += weight

      if (totalWeight > mid) {
        dayCounter++
        totalWeight = weight
      }
    }

    if (dayCounter > days) left = mid + 1
    else right = mid
  }

  return left
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3))
console.log(shipWithinDays([1, 2, 3, 1, 1], 4))
