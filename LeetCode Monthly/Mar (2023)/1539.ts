//https://leetcode.com/problems/kth-missing-positive-number/description/

function findKthPositive(arr: number[], k: number): number {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const missing = arr[mid] - mid - 1

    if (missing < k) left = mid + 1
    else right = mid - 1
  }

  return right + k + 1
}
