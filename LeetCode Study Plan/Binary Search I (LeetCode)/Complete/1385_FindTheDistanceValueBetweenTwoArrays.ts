//https://leetcode.com/problems/find-the-distance-value-between-two-arrays/?envType=study-plan&id=binary-search-i

function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number
): number {
  let distance = 0
  let valid = true

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        valid = false
        break
      }
    }
    if (valid) distance++
    valid = true
  }
  return distance
}

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2))
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3))
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6))
