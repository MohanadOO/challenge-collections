//https://leetcode.com/problems/kth-missing-positive-number/?envType=study-plan&id=binary-search-i

function findKthPositive(arr: number[], k: number): number {
  let start = 1
  const missingNumbers: number[] = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > start) {
      for (let j = start; j < arr[i]; j++) {
        missingNumbers.push(j)
        if (missingNumbers[k - 1]) return missingNumbers[k - 1]
        start++
      }
    }
    start++
  }

  return arr[arr.length - 1] + (k - missingNumbers.length)
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1, 2, 3, 4], 2))
console.log(findKthPositive([5, 6, 7, 8, 9], 9))
