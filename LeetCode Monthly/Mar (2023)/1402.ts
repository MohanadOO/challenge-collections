//https://leetcode.com/problems/reducing-dishes/

function maxSatisfaction(satisfaction: number[]): number {
  satisfaction.sort((a, b) => a - b)
  let sum = 0
  let max = 0

  let left = 0
  let right = satisfaction.length

  function findMax(index: number) {
    const slice = satisfaction.slice(index)
    sum = slice.reduce((a, b, i) => a + b * (i + 1), 0)
    max = Math.max(max, sum)
  }

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    findMax(mid)
    if (sum < max) left = mid + 1
    else right = mid
  }

  findMax(right + 1)
  return max
}

console.log(
  maxSatisfaction([
    -36, -38, 64, -19, 22, -84, 76, 3, 21, 33, -11, -86, -55, -30, 40, -2, 7,
    -3, -38, -87, -77, -75, -88, 29, -59, -92, 77, -63, 83, 32, 71, -15, -69, 8,
    11, 62, -15, -22, -27, 6, 18, 23, 100, 65, -71, 84,
  ])
)
console.log(
  maxSatisfaction([
    2, 32, 23, 63, -85, 45, 7, 27, -91, 51, -5, -94, -79, -91, 61, -72, -55, 95,
    -14, -39, -26, -14, -25, 14, -54, 81, 15, 21, -90, 80,
  ])
)
console.log(
  maxSatisfaction([-5, -7, 8, -2, 1, 3, 9, 5, -10, 4, -5, -2, -1, -6])
)
console.log(
  maxSatisfaction([
    76, 83, 55, -36, -8, 40, -60, -72, 27, -32, 37, 1, 77, 24, -46, -26, 20,
    -89, -35, -99, 58, -7,
  ])
)
console.log(maxSatisfaction([-1, -8, 0, 5, -9]))
console.log(maxSatisfaction([-2, 5, -1, 0, 3, -3]))
console.log(maxSatisfaction([4, 3, 2]))
console.log(maxSatisfaction([-1, -4, -5]))
